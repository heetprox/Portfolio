"use client";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

type OptimizedImageProps = ImageProps & {
  className?: string;
};

function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div
          className={cn(
            "absolute h-full w-full inset-0 bg-neutral-800/80 animate-pulse rounded-full",
            className
          )}
        />
      )}
      <Image
        alt={alt || ""}
        {...props}
        onLoadingComplete={handleImageLoad}
        className={cn(className)}
      />
    </div>
  );
}

export default OptimizedImage;