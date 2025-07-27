import React from 'react'
import axios, { AxiosError } from 'axios'

const base_url = process.env.NEXT_PUBLIC_BASE_URL

interface Post {
  _id: string;
  title: string;
  date: string;
  images: string[];
}

const page = async () => {
  try {
    // Add timeout and retry logic
    const response = await axios.get<Post[]>(`${base_url}/data`, {
      timeout: 30000, // 30 second timeout
      headers: {
        'Connection': 'keep-alive',
        'Accept': 'application/json',
      },
    });
    
    const data = response.data;
    
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Gallery</h1>
          
          {/* Check if data array exists and has items */}
          {data && data.length > 0 ? (
            <div className="space-y-12">
              {data.map((post: Post) => (
                <div key={post._id} className="bg-white rounded-xl shadow-lg p-6">
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  
                  {/* Date */}
                  <p className="text-gray-600 text-lg mb-6">
                    {post.date}
                  </p>
                  
                  {/* Images Grid */}
                  {post.images && post.images.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {post.images.map((image: string, index: number) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <img
                            src={image}
                            alt={`${post.title} - Image ${index + 1}`}
                            className="w-full h-64 object-cover"
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