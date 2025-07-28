/**
 * Utility functions for image optimization
 */

/**
 * Generates a srcSet for responsive images
 * @param src The source URL of the image
 * @param sizes Array of sizes to generate srcSet for
 * @returns A string containing the srcSet attribute value
 */
export function generateSrcSet(src: string, sizes: number[] = [640, 750, 828, 1080, 1200, 1920]): string {
  return sizes
    .map((size) => {
      // For external URLs, we need to use the Next.js Image API
      if (src.startsWith('http')) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75 ${size}w`;
      }
      // For internal images
      return `${src}?w=${size}&q=75 ${size}w`;
    })
    .join(', ');
}

/**
 * Determines if an image should be loaded with priority
 * @param index The index of the image in the list
 * @param isFirstPost Whether this is the first post
 * @returns Boolean indicating if the image should be loaded with priority
 */
export function shouldLoadWithPriority(index: number, isFirstPost: boolean): boolean {
  return index === 0 && isFirstPost;
}

/**
 * Calculates the appropriate quality for an image based on its importance
 * @param index The index of the image in the list
 * @param isFirstPost Whether this is the first post
 * @returns The quality value (0-100)
 */
export function getImageQuality(index: number, isFirstPost: boolean): number {
  if (index === 0 && isFirstPost) {
    return 90; // High quality for the first image of the first post
  } else if (index < 3) {
    return 80; // Good quality for the first few images
  } else {
    return 75; // Standard quality for the rest
  }
}