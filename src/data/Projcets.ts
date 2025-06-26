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
    title: 'spine',
    subtitle: 'a music based dating app.',
    link: '',
    image: '/projects/14.png',
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
    image: '/projects/14.png',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 11,
    type: 'image',
    title: 'Amouris',
    subtitle: 'A design studio.',
    link: 'vaayu-jewels',

    image: '/projects/11.png',
    textColor: '#333333',
    logoImage: true
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
  {
    id: 1,
    type: 'image',
    title: 'Portfolio',
    subtitle: "Designer Deep Patel's Portfolio.",
    link: 'vaayu-jewels',

    image: '/projects/1.png',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 2,
    type: 'image',
    title: 'Payzepp',
    link: 'payzepp',
    subtitle: 'A try to build payment gateway in typescript. (succeed)',
    image: '/projects/2.png',
    textColor: '#ffffff',
    logoImage: true
  },
  {
    id: 3,
    type: 'image',
    title: 'Vaayu jewels',
    subtitle: 'E-COMMERCE JEWELRY WEBSITE',
    link: 'vaayu-jewels',

    image: '/projects/3.png',
    textColor: '#333333'
  },
  {
    id: 6,
    type: 'image',

    link: 'Swapper',
    subtitle: 'a uniswap clone.',
    title: 'SKIFF',
    image: '/projects/6.png',
    textColor: '#333333',
    logoImage: true
  }
];