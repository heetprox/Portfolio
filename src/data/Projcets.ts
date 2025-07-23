export interface Project {
  id: number;
  type: 'image' | 'video';
  title: string;
  subtitle: string;
  image: string;
  link: string;
  locked?: boolean;
  textColor?: string;
  logoImage?: boolean;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'natural';
  gridColumn?: string;
  gridRow?: string;
}

export const projectData: Project[] = [
  {
    id: 14,
    type: 'image',
    title: 'Trackyou',
    subtitle: 'Track your coding activity.',
    link: '',
    image: '/projects/trackyou.png',
    textColor: '#333333',
    locked: true,
    logoImage: true
  },
  {
    id: 12,
    type: 'video',
    title: 'Vaayu jewels',
    link: '/vaayu-jewels',
    subtitle: 'E-COMMERCE JEWELRY WEBSITE',
    image: '/projects/vaayujewelsv.mp4',
    textColor: '#333333',
    logoImage: true
  },

  {
    id: 14,
    type: 'image',
    title: 'Paycrypt',
    subtitle: 'your bank solution.',
    link: '/paycrypt',
    image: '/projects/paycryot.png',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 11,
    type: 'image',
    title: 'Sunflower',
    subtitle: 'find your music buddy.',
    link: 'vaayu-jewels',

    image: '/projects/sunflower.avif',
    textColor: '#333333',
    logoImage: true,
    locked: true
  },
  {
    id: 1,
    type: 'image',
    title: 'Kafinao',
    subtitle: "A Coffee shop NFTs",
    link: 'vaayu-jewels',

    image: '/projects/1.png',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 13,
    type: 'image',
    title: 'SpeedCast',
    subtitle: 'better api client than axios.',
    link: 'vaayu-jewels',

    image: '/projects/speed.svg',
    textColor: '#333333',
    logoImage: true
  },
]