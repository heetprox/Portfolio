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
    image: '/preview/trackyou.png',
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
    image: '/preview/vaayujewelsv.mp4',
    textColor: '#333333',
    logoImage: true
  },

  {
    id: 14,
    type: 'image',
    title: 'Paycrypt',
    subtitle: 'your bank solution.',
    link: '/paycrypt',
    image: '/preview/paycryot.png',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 11,
    type: 'image',
    title: 'Sunflower',
    subtitle: 'find your music buddy.',
    link: '',
    image: '/preview/sunflower.jpg',
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

    image: '/preview/kafinao.png',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 13,
    type: 'video',
    title: 'SpeedCast',
    subtitle: 'better api client than axios.',
    link: 'vaayu-jewels',

    image: '/preview/speedcast.mp4',
    textColor: '#333333',
    logoImage: true
  },
]