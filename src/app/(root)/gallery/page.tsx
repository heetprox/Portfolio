'use client';

import React, { useRef, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import Image from 'next/image';

const base_url = process.env.NEXT_PUBLIC_BASE_URL

interface Post {
  _id: string;
  title: string;
  startDate: string; // API returns ISO string, not Date object
  endDate?: string;  // API returns ISO string, not Date object
  images: string[];
}
interface PostWithDateInfo extends Post {
  year: number;
  month: number;
  day: number;
}

interface YearGroup {
  year: number;
  posts: PostWithDateInfo[];
}
const formatTitle = (title: string): string => {
  return title.length > 35 ? title.slice(0, 35) + '...' : title;
};

const formatDate = (date: Date) => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day} ${month}`;
};

// Function to format date range
const formatDateRange = (startDate: string, endDate?: string) => {
  const start = new Date(startDate);
  const year = start.getFullYear();

  if (!endDate) {
    return `${formatDate(start)} ${year}`;
  }

  const end = new Date(endDate);
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  if (startYear === endYear) {
    return `${formatDate(start)} - ${formatDate(end)} ${year}`;
  } else {
    return `${formatDate(start)} ${startYear} - ${formatDate(end)} ${endYear}`;
  }
};

// Group posts by year
const groupPostsByYear = (posts: Post[]): YearGroup[] => {

  const grouped = posts.reduce((acc, post) => {
    const startDate = new Date(post.startDate);
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const day = startDate.getDate(); // Changed from getDay() to getDate()


    if (!acc[year]) {
      acc[year] = [];
    }

    // Add the date info to the post
    const postWithDateInfo: PostWithDateInfo = {
      ...post,
      year,
      month,
      day
    };

    acc[year].push(postWithDateInfo);
    return acc;
  }, {} as Record<number, PostWithDateInfo[]>);


  return Object.entries(grouped)
    .map(([year, posts]) => ({
      year: parseInt(year),
      posts: posts.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    }))
    .sort((a, b) => b.year - a.year);
};

const GalleryPage = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null); // ✅ Move hover state to top level
  const postRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(`${base_url}/data`, {
          headers: {
            'Connection': 'keep-alive',
            'Accept': 'application/json',
          },
        });

        const sortedData = response.data?.sort((a: Post, b: Post) => {
          const dateA = new Date(a.startDate);
          const dateB = new Date(b.startDate);
          return dateB.getTime() - dateA.getTime();
        });

        setData(sortedData || []);
      } catch (error) {
        let errorMessage = 'Unable to fetch data from the API. Please try again later.';

        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.code === 'ECONNRESET') {
            errorMessage = 'Connection was reset by the server. This might be due to server overload or timeout.';
          } else if (axiosError.code === 'ECONNREFUSED') {
            errorMessage = 'Connection refused. Please check if the API server is running.';
          } else if (axiosError.code === 'ENOTFOUND') {
            errorMessage = 'API server not found. Please check the URL configuration.';
          } else if (axiosError.response?.status) {
            errorMessage = `Server responded with status ${axiosError.response.status}: ${axiosError.response.statusText}`;
          }
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Scroll spy effect to highlight active post
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentPost = null;
      let minDistance = Infinity;

      // Find the post closest to the center of the viewport
      Object.entries(postRefs.current).forEach(([postId, element]) => {
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          const elementCenter = elementTop + element.offsetHeight / 2;

          const distance = Math.abs(scrollPosition - elementCenter);

          if (distance < minDistance && elementTop <= scrollPosition && elementBottom >= scrollPosition - window.innerHeight / 2) {
            minDistance = distance;
            currentPost = postId;
          }
        }
      });

      if (currentPost !== activePostId) {
        setActivePostId(currentPost);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, activePostId]);

  const scrollToPostAlternative = (postId: string) => {
    const element = postRefs.current[postId];
    if (element) {
      // Find the title element within the post
      const titleElement = element.querySelector('h2');
      if (titleElement) {
        const titleRect = titleElement.getBoundingClientRect();
        const absoluteTitleTop = titleRect.top + window.pageYOffset;

        // Small offset to show some space above the title
        const offset = 80;

        window.scrollTo({
          top: absoluteTitleTop - offset,
          behavior: 'smooth'
        });
      } else {
        // Fallback to original method with offset
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const offset = 100;

        window.scrollTo({
          top: absoluteElementTop - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white/50 text-sm tracking-wider uppercase mono">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl  text-red-600 mb-4">
            Error Loading Data
          </h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <h3 className="text-yellow-800 mb-2">Troubleshooting Tips:</h3>
            <ul className="text-yellow-700 text-sm text-left space-y-1">
              <li>• Check if your API server is running</li>
              <li>• Verify the NEXT_PUBLIC_BASE_URL environment variable</li>
              <li>• Check server logs for any issues</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  const yearGroups = groupPostsByYear(data);

  return (
    <div className="flex justify-end w-full"
    >
      {/* Year Navigation Sidebar */}
      <div className="w-[25%] hidden md:block h-[100vh] "
        style={{
          position: 'sticky',
          padding: "0 clamp(0.75rem, 0.75vw, 240rem)",
          top: "clamp(1rem, 3vw, 240rem)",
          height: 'fit-content',
          alignSelf: 'flex-start'
        }}
      >
        <div className="">
          {yearGroups.map((yearGroup) => (
            <div key={yearGroup.year} className="mb-8"
            style={{
                          fontSize: "clamp(0.85rem, 0.9vw, 240rem)",
                        }}
            >
              <div className="text-white  "
                style={{
                  padding: "clamp(0.5rem, 0.75vw, 240rem) 0",
                }}
              >
                {yearGroup.year}
              </div>

              {/* Horizontal Bars for Posts */}
              <div className="flex flex-col"
                style={{
                  gap: "clamp(1rem, 1vw, 240rem)",
                }}
              >
                {yearGroup.posts.map((post) => {
                  const isHover = hoveredPostId === post._id; // ✅ Use centralized hover state
                  const isActive = activePostId === post._id;
                  return (
                    <div className="flex items-center"
                      style={{
                        gap: "clamp(0.5rem, 0.5vw, 240rem)",
                        height: "clamp(1rem, 1.5vw, 240rem)",
                      }}
                      key={post._id}

                    >
                      <div
                        onClick={() => scrollToPostAlternative(post._id)}
                        onMouseEnter={() => setHoveredPostId(post._id)} // ✅ Update centralized state
                        onMouseLeave={() => setHoveredPostId(null)} // ✅ Update centralized state
                        className={`h-1.5 rounded-full  cursor-pointer ${isActive
                          ? 'w-12 xl:w-14 2xl:w-16 bg-[#FDE037]'
                          : 'w-8 xl:w-9 2xl:w-10 bg-white/60 transition-all duration-300 hover:bg-white hover:w-12 xl:hover:w-14 2xl:hover:w-16'
                          }`}
                      >

                      </div>
                      <div className={`text-white w-full overflow-hidden capitalize  ${isHover ? 'block' : 'hidden'}`}
                        
                      >
                        <span className="text-[#FDE037]">{post.month.toString().length === 1 ? "0" + post.month : post.day.toString().length === 1 ? "0" + post.day : post.day}{"."}{post.month.toString().length === 1 ? "0" + post.month : post.month}</span> {formatTitle(post.title)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-[75%] md:ml-[25%]"
        style={{
          padding: "clamp(1rem, 1vw, 240rem) clamp(0.5rem, 0.5vw, 240rem)",
        }}
      >
        {data && data.length > 0 ? (
          <div className="flex-col flex"
            style={{
              gap: "clamp(1rem, 3vw, 240rem)",
            }}
          >
            {data.map((post: Post) => (
              <div
                key={post._id}
                ref={(el) => { postRefs.current[post._id] = el; }}
                className="flex flex-col"
                style={{
                  gap: "clamp(0.5rem, 0.5vw, 240rem)",
                  fontSize: "clamp(0.85rem, 0.9vw, 240rem)",
                }}
              >
                <div className="flex flex-col">
                  <h2 className="text-white capitalize">
                    {post.title}
                  </h2>

                  <p className="text-white/50 mono"
                    style={{
                      fontSize: "clamp(0.7rem, 0.7vw, 240rem)",
                      padding: "clamp(0.25rem,0.25vw,200rem) 0"
                    }}
                  >
                    {formatDateRange(post.startDate, post.endDate)}
                  </p>
                </div>

                {post.images && post.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    style={{
                      gap: "clamp(0.75rem, 0.75vw, 240rem)",
                    }}
                  >
                    {post.images.map((image: string, index: number) => (
                      <div key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <Image
                          width={400}
                          height={400}
                          src={image}
                          alt={`${post.title} - Image ${index + 1}`}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {(!post.images || post.images.length === 0) && (
                  <p className="text-gray-500 text-center py-4">
                    No images available for this post
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">
            No gallery items available
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;