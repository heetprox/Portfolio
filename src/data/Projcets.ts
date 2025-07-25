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
    id: 1,
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
    id: 2,
    type: 'video',
    title: 'Vaayu jewels',
    link: '/vaayu-jewels',
    subtitle: 'E-COMMERCE JEWELRY WEBSITE',
    image: '/preview/vaayujewelsv.mp4',
    textColor: '#333333',
    logoImage: true
  },

  {
    id: 3,
    type: 'image',
    title: 'Paycrypt',
    subtitle: 'your bank solution.',
    link: '/paycrypt',
    image: '/preview/paycrypt.svg',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 4,
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
    id: 5,
    type: 'image',
    title: 'Kafinao',
    subtitle: "A Coffee shop NFTs",
    link: 'kafinao',

    image: '/preview/kafinao.png',
    textColor: '#333333',
    logoImage: true
  },
  {
    id: 6,
    type: 'video',
    title: 'SpeedCast',
    subtitle: 'better api client than axios.',
    link: 'vaayu-jewels',

    image: '/preview/speedcast.mp4',
    textColor: '#333333',
    logoImage: true
  },
]

export interface ProjectPageData {
  link: string;
  title: string;
  poster: string;
  subtitle: string;
  description1: string;
  description2: string;
  role: string[];
  collaborators: string[];
  techStack: string[];
  timeline: string;
  rlinks: {
    link: string;
    text: string;
  }[];

  data: {
    image: string;
    description?: string;
  }[];
}

export const projectPageData: ProjectPageData[] = [
  {
    link: 'vaayu-jewels',
    title: 'Vaayu Jewels',
    poster: '/projects/vaayujewels/1.svg',
    subtitle: 'E-COMMERCE JEWELRY WEBSITE',
    description1: "I (He/Him) build digital experiences. I crafted VaayuJewels.com end to end — from frontend flows to backend logic. I thrive where design meets engineering, and I'm always up for shaping beautiful, functional web products. Got something cool in mind? Let’s connect ↗",
    description2: "I (He/Him) design and develop websites. I built VaayuJewels.com from scratch — full-stack architecture↗",
    role: ['Full Stack Developer.', 'Designer.'],
    collaborators: ['Harshil Madaliye'],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    timeline: '(SEP-NOV) 2024',
    rlinks: [
      {
        link: 'https://vaayujewels.com',
        text: 'MAIN WEBSITE',
      },
      {
        link: 'https://www.google.com/search?q=vaayu+jewels&oq=vaayu+jewels&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDINCAEQABiGAxiABBiKBTIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIKCAUQABiABBiiBDIKCAYQABiABBiiBNIBCDc0NzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        text: 'SEO',
      },
    ],  
    data: [
      {
        image: '/projects/vaayujewels/2.png',
        description: 'VaayuJewels.com is a website that sells jewelry.',
      },
    ]


  },



  {
    link: 'paycrypt',
    title: 'Paycrypt',
    poster: '/projects/paycrypt/1.gif',
    subtitle: 'YOUR PAYMENTS SOLUTION',
    description1: "Paycrypt is a financial technology company, not a bank or a money services business. Certain services are provided by our licensed partners across the globe. By creating your account on Paycrypt, you agree to our terms and conditions, our partners's terms↗",
    description2: "Join the future of global payments today. Start accepting crypto and fiat payments in minutes.",
    role: ['Full Stack Developer.', 'Designer.'],
    collaborators: ['Tanmay','Meyank'],
    techStack: ['Next.js','Solidiy','Go', 'TypeScript'],
    timeline: '2025',
    rlinks: [
      {
        link: 'https://paycrypt.tech/',
        text: 'MAIN WEBSITE',
      },
      
    ],  
    data: [
    ]


  },





  {
    link: 'kafinao',
    title: 'Kafinao',
    poster: '/projects/kafinao/0.png',
    subtitle: 'E-COMMERCE JEWELRY WEBSITE',
    description1: "I (He/Him) build digital experiences. I crafted VaayuJewels.com end to end — from frontend flows to backend logic. I thrive where design meets engineering, and I'm always up for shaping beautiful, functional web products. Got something cool in mind? Let’s connect ↗",
    description2: "I (He/Him) design and develop websites. I built VaayuJewels.com from scratch — full-stack architecture↗",
    role: ['Full Stack Developer.', 'Designer.'],
    collaborators: ['Harshil Madaliye'],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    timeline: '(SEP-NOV) 2024',
    rlinks: [
      {
        link: 'https://vaayujewels.com',
        text: 'MAIN WEBSITE',
      },
      {
        link: 'https://www.google.com/search?q=vaayu+jewels&oq=vaayu+jewels&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDINCAEQABiGAxiABBiKBTIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIKCAUQABiABBiiBDIKCAYQABiABBiiBNIBCDc0NzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        text: 'SEO',
      },
    ],  
    data: [
      {
        image: '/projects/kafinao/1.png',
      },
      {
        image: '/projects/kafinao/2.png',
      },
      {
        image: '/projects/kafinao/3.png',
      },
      {
        image: '/projects/kafinao/4.png',
      },
      {
        image: '/projects/kafinao/5.png',
      },
      {
        image: '/projects/kafinao/6.png',
      },
      {
        image: '/projects/kafinao/7.png',
      },
    ]
  },
  
]


