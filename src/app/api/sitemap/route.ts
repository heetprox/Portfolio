import { projectPageData } from '@/data/Projcets';
import { NextResponse } from 'next/server';

/**
 * API route to dynamically generate a sitemap XML
 * This can be accessed at /api/sitemap
 */
export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://heet.pro';
  
  // Current date for lastmod
  const date = new Date().toISOString().split('T')[0];
  
  // XML header
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add homepage
  xml += `  <url>\n    <loc>${baseUrl}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  
  // Add project pages
  projectPageData.forEach((project) => {
    xml += `  <url>\n    <loc>${baseUrl}/projects/${project.link}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });
  
  // Close XML
  xml += '</urlset>';
  
  // Return XML with proper content type
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}