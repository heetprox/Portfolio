import { projectPageData } from '@/data/Projcets';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heet.pro';
  
  const currentDate = new Date();
  
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
  
  const projectPages = projectPageData.map((project) => ({
    url: `${baseUrl}/projects/${project.link}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  return [...routes, ...projectPages] as MetadataRoute.Sitemap;
}