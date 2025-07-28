'use client';

import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
interface Post {
  _id: string;
  title: string;
  startDate: string; // API returns ISO string, not Date object
  endDate?: string;  // API returns ISO string, not Date object
  images: string[];
}

interface FetchOptions<T> {
  url: string;
  initialData?: T;
  headers?: Record<string, string>;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
  sortFunction?: (a: Post, b: Post) => number;
  cacheKey?: string;
  cacheDuration?: number; 
}

interface CachedData<T> {
  data: T;
  timestamp: number;
}

/**
 * Custom hook for optimized data fetching with caching and error handling
 */
export function useOptimizedDataFetch<T>({ 
  url, 
  initialData, 
  headers = {}, 
  onSuccess, 
  onError,
  sortFunction,
  cacheKey,
  cacheDuration = 5 * 60 * 1000 // 5 minutes default cache duration
}: FetchOptions<T>) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Check if we have cached data
      if (cacheKey) {
        try {
          const cachedDataString = localStorage.getItem(`data-cache-${cacheKey}`);
          if (cachedDataString) {
            const cachedData: CachedData<T> = JSON.parse(cachedDataString);
            const isExpired = Date.now() - cachedData.timestamp > cacheDuration;
            
            if (!isExpired) {
              setData(cachedData.data);
              setLoading(false);
              onSuccess?.(cachedData.data);
              return; // Use cached data and skip API call
            }
          }
        } catch (e) {
          // If there's an error reading from cache, proceed with API call
          console.warn('Error reading from cache:', e);
        }
      }

      try {
        const response = await axios.get<T>(url, {
          headers: {
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            ...headers
          },
        });

        let responseData: T = response.data;

        // Apply sorting if provided
        if (sortFunction && Array.isArray(responseData)) {
          // Create a properly typed copy for sorting
          responseData = [...responseData].sort(sortFunction) as T;
        }

        // Cache the data if cacheKey is provided
        if (cacheKey) {
          try {
            localStorage.setItem(`data-cache-${cacheKey}`, JSON.stringify({
              data: responseData,
              timestamp: Date.now()
            }));
          } catch (e) {
            console.warn('Error writing to cache:', e);
          }
        }

        setData(responseData);
        onSuccess?.(responseData);
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
        onError?.(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, cacheKey, cacheDuration,onSuccess,onError, sortFunction,headers]);

  return { data, loading, error };
}