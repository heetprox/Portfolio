'use client';

import React, { useRef, useEffect, useState } from 'react'
import VirtualizedImageGrid from '@/components/VirtualizedImageGrid';
import { useOptimizedDataFetch } from '@/hooks/useOptimizedDataFetch';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const base_url = process.env.NEXT_PUBLIC_BASE_URL

interface Post {
  _id: string;
  title: string;
  startDate: string; 
  endDate?: string;  
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

const groupPostsByYear = (posts: Post[] | undefined): YearGroup[] => {
  if (!posts) return [];

  const grouped = posts.reduce((acc, post) => {
    const startDate = new Date(post.startDate);
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const day = startDate.getDate(); // Changed from getDay() to getDate()


    if (!acc[year]) {
      acc[year] = [];
    }

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
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);
  const postRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { data } = useOptimizedDataFetch<Post[]>({
    url: `${base_url}/data`,
    initialData: [],
    sortFunction: (a: Post, b: Post) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB.getTime() - dateA.getTime();
    },
    cacheKey: 'gallery-posts',
    cacheDuration: 10 * 60 * 1000 // 10 minutes cache
  });

  // Get active ID directly from useScrollSpy
  const activePostId = useScrollSpy<string>(postRefs.current, {
    threshold: 0.2,
    rootMargin: '0px 0px -70% 0px',
    debounceTime: 200
  });


  useEffect(() => {
    if (data && data.length > 0) {
      setTimeout(() => {
      }, 500);
    }
  }, [data]);

  const scrollToPostAlternative = (postId: string) => {
    const element = postRefs.current[postId];
    if (element) {
      // Find the title element within the post
      const titleElement = element.querySelector('h2');
      if (titleElement) {
        const titleRect = titleElement.getBoundingClientRect();
        const absoluteTitleTop = titleRect.top + window.pageYOffset;

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

  // ... rest of your loading and error handling code remains the same

  const yearGroups = groupPostsByYear(data);

  return (
    <div className="flex justify-end w-full">
      {/* Year Navigation Sidebar */}
      <div className="w-[25%] hidden md:block h-[100vh]"
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
              <div className="text-white"
                style={{
                  padding: "clamp(0.5rem, 0.75vw, 240rem) 0",
                }}
              >
                {yearGroup.year}
              </div>

              <div className="flex flex-col"
                style={{
                  gap: "clamp(1rem, 1vw, 240rem)",
                }}
              >
                {yearGroup.posts.map((post) => {
                  const isHover = hoveredPostId === post._id; 
                  const isActive = activePostId === post._id;
                  
                  
                  return (  
                    <div className="flex items-center cursor-pointer"
                      style={{
                        gap: "clamp(0.5rem, 0.5vw, 240rem)",
                        height: "clamp(0.5rem, 0.5vw, 240rem)",
                      }}
                        onMouseEnter={() => setHoveredPostId(post._id)} 
                        onMouseLeave={() => setHoveredPostId(null)} 
                        onClick={() => scrollToPostAlternative(post._id)}

                      key={post._id}
                    >
                      <div
                        className={`h-1 rounded-full cursor-pointer ${isActive
                          ? 'w-12 xl:w-14 2xl:w-16 bg-[#FDE037]'
                          : 'w-8 xl:w-9 2xl:w-10 bg-white/60 transition-all duration-300 '
                          } ${isHover ? 'bg-white w-12 xl:w-14 2xl:w-16' : ''}`}
                      >
                      </div>
                      <div className={`text-white w-full capitalize ${isHover ? 'block' : 'hidden'}`}>
                        <span className="text-[#FDE037]">{post.day.toString().padStart(2, '0')}.{(post.month + 1).toString().padStart(2, '0')}</span> {formatTitle(post.title)}
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
                ref={(el) => { 
                  postRefs.current[post._id] = el;
                  // Ensure data-id is set immediately
                  if (el) {
                    el.setAttribute('data-id', post._id);
                  }
                }}
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
                  <VirtualizedImageGrid 
                    images={post.images}
                    title={post.title}
                    gridCols={`
                      ${post.images.length == 4 && "grid-cols-4"}
                      ${post.images.length == 8 && "grid-cols-4"}
                      ${post.images.length == 6 && "grid-cols-3"}
                      ${post.images.length == 3 && "grid-cols-3"}
                      ${post.images.length == 2 && "grid-cols-3"}
                      ${post.images.length == 1 && "grid-cols-4"}
                    `}
                    isFirstPost={post === data[0]}
                  />
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