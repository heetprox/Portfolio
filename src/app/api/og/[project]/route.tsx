import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { projectPageData } from '@/data/Projcets';

export const runtime = 'edge';

/**
 * Dynamic OG image generation for project pages
 * Access at /api/og/[project]
 */
export async function GET(request: NextRequest) {
  // Extract the project from the URL path
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const project = pathParts[pathParts.length - 1];
  
  // Find project data
  const projectData = projectPageData.find(p => p.link === project);
  
  // If project not found, return a default OG image
  if (!projectData) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#131313',
            color: 'white',
            padding: '40px',
          }}
        >
          <h1 style={{ fontSize: 60, fontWeight: 'bold', margin: 0 }}>Project Not Found</h1>
          <h2 style={{ fontSize: 36, margin: '20px 0' }}>Heet Pro</h2>
          <p style={{ fontSize: 24 }}>heet.pro</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
  
  // Generate project-specific OG image
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#131313',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #333',
            borderRadius: '8px',
            width: '90%',
            height: '90%',
            padding: '20px',
          }}
        >
          <h1 style={{ fontSize: 60, fontWeight: 'bold', margin: 0 }}>{projectData.title}</h1>
          <h2 style={{ fontSize: 36, margin: '20px 0', color: '#FDE037' }}>{projectData.subtitle}</h2>
          
          <div style={{ display: 'flex', gap: '20px', margin: '40px 0' }}>
            {projectData.techStack.slice(0, 4).map((tech, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  fontSize: 24,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          
          <p style={{ fontSize: 24, maxWidth: '80%', textAlign: 'center', margin: '20px 0' }}>
            {projectData.description2 ? projectData.description2.substring(0, 100) + '...' : ''}
          </p>
          
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: 24, margin: '10px 0' }}>By Heet Vavadiya</p>
            <p style={{ fontSize: 24 }}>heet.pro</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}