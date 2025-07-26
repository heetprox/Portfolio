'use client';

import { ProjectPageData } from '@/data/Projcets';
import JsonLd from './JsonLd';

interface ProjectStructuredDataProps {
  project: ProjectPageData;
}

/**
 * Component for adding structured data (JSON-LD) to project pages
 */
export default function ProjectStructuredData({ project }: ProjectStructuredDataProps) {
  // Create structured data for the project
  const projectData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': project.title,
    'description': project.description1,
    'creator': {
      '@type': 'Person',
      'name': 'Heet Vavadiya',
      'url': 'https://heet.pro'
    },
    'dateCreated': project.timeline,
    'keywords': project.techStack.join(', '),
    'url': `https://heet.pro/projects/${project.link}`,
    'image': `https://heet.pro${project.poster}`,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://heet.pro/projects/${project.link}`
    },
    'about': {
      '@type': 'Thing',
      'name': project.subtitle
    }
  };

  return <JsonLd data={projectData} />;
}