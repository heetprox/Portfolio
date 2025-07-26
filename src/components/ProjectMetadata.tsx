import { Metadata } from 'next';
import { ProjectPageData } from '@/data/Projcets';

/**
 * Generates metadata for project pages to optimize social media sharing
 */
export function generateProjectMetadata(project: ProjectPageData): Metadata {
  const title = `${project.title} | Heet Pro`;
  const description = project.description1.substring(0, 160); 
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://heet.pro/projects/${project.link}`,
      siteName: 'Heet Pro',
      images: [
        {
          // Use dynamic OG image API
          url: `https://heet.pro/api/og/${project.link}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
        {
          // Also include the project poster as a fallback
          url: `https://heet.pro${project.poster}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@heetvavadiya',
      images: [
        `https://heet.pro/api/og/${project.link}`,
        `https://heet.pro${project.poster}`
      ],
    },
  };
}