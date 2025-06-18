export interface Project {
    id: number;
    type: 'image' | 'video';
    title: string;
    subtitle?: string;
    image: string;
    locked?: boolean;
    textColor?: string;
    logoImage?: boolean;
    gridColumn?: string;
    gridRow?: string;
  }
  
 export const projectData: Project[] = [
      {
          id: 14,
          type: 'image',
          title: 'ANIME',
          image: '/projects/14.png',
          textColor: '#333333',
          logoImage: true
        },
      {
          id: 12,
          type: 'video',
          title: 'Vaayu jewels',
          image: '/projects/vaayujewelsv.mp4',
          textColor: '#333333',
          logoImage: true
        },
      {
          id: 11,
          type: 'image',
          title: 'ANIME',
          image: '/projects/11.png',
          textColor: '#333333',
          logoImage: true
        },
    {
      id: 1,
      type: 'image',
      title: 'ANIME',
      subtitle: 'MOBILE APP',
      image: '/projects/1.png',
      textColor: '#333333',
      logoImage: true
    },
    {
      id: 2,
      type: 'image',
      title: 'AZUKI',
      subtitle: 'WEB APP',
      image: '/projects/2.png',
      textColor: '#ffffff',
      logoImage: true
    },
    {
      id: 3,
      type: 'image',
      title: 'MULTIMODAL SEARCH',
      subtitle: 'BRAIN TECHNOLOGIES',
      image: '/projects/3.png',
      textColor: '#333333'
    },
    {
      id: 4,
      type: 'image',
      title: 'APPLE',
      subtitle: 'CONVERSATIONAL AI',
      image: '/projects/4.png',
      textColor: '#ffffff'
    },
    {
      id: 5,
      type: 'image',
      title: 'NOTION',
      image: '/projects/5.png',
      locked: true,
      textColor: '#333333',
      logoImage: true
    },
    {
      id: 6,
      type: 'image',
      title: 'SKIFF',
      image: '/projects/6.png',
      textColor: '#333333',
      logoImage: true
    }
  ];