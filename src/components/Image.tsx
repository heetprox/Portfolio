"use client";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

type OptimizedImageProps = ImageProps & {
  className?: string;
};

function OptimizedImage({ className, alt, priority, loading, ...props }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {isLoading && (
        <div
          className={cn(
            "absolute h-full w-full inset-0 bg-neutral-800/80 animate-pulse",
            className
          )}
        />
      )}
      <Image
        alt={alt || ""}
        {...props}
        priority={priority}
        loading={loading}
        onLoad={handleImageLoad}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
      />
    </div>
  );
}

export default OptimizedImage;