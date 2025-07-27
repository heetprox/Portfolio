import React from 'react'
import axios, { AxiosError } from 'axios'
import Image from 'next/image';

const base_url = process.env.NEXT_PUBLIC_BASE_URL

interface Post {
  _id: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  images: string[];
}

// Custom date formatting function
const formatDate = (date: Date) => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}`;
};

// Function to format date range
const formatDateRange = (startDate: Date, endDate?: Date) => {
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

const page = async () => {
  try {
    // Add timeout and retry logic
    const response = await axios.get<Post[]>(`${base_url}/data`, {
      headers: {
        'Connection': 'keep-alive',
        'Accept': 'application/json',
      },
    });

    const data = response.data;

    return (
      <div className=" flex justify-end w-full"

      >
        <div className="w-[25%] h-[100vh] bg-[#111111]">
        </div>

        <div className="w-[75%]"
          style={{
            padding: "clamp(1rem, 1.25vw, 240rem) clamp(0.5rem, 0.5vw, 240rem)",
          }}
        >
          {data && data.length > 0 ? (
            <div className="flex-col flex"
              style={{
                gap: "clamp(1rem, 3vw, 240rem)",
              }}
            >
              {data.map((post: Post) => (
                <div key={post._id} className="flex flex-col"
                  style={{
                    gap: "clamp(0.5rem, 0.5vw, 240rem)",
                    fontSize: "clamp(0.85rem, 0.9vw, 240rem)",
                  }}
                >
                  <div className="flex flex-col">
                    <h2 className="text-white "
                    >
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
                      style={{
                        gap: "clamp(0.75rem, 0.75vw, 240rem)",
                      }}
                    >
                      {post.images.map((image: string, index: number) => (
                        <div key={index} className=" overflow-hidden hover:shadow-md transition-shadow duration-300">
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

                  {/* No images message for this post */}
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
    )
  } catch (error) {
    console.error('Error fetching data:', error);

    // Type-safe error handling
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

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Data
          </h1>
          <p className="text-gray-600 mb-4">
            {errorMessage}
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <h3 className="text-yellow-800 font-semibold mb-2">Troubleshooting Tips:</h3>
            <ul className="text-yellow-700 text-sm text-left space-y-1">
              <li>• Check if your API server is running</li>
              <li>• Verify the NEXT_PUBLIC_BASE_URL environment variable</li>
              <li>• Check server logs for any issues</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default page