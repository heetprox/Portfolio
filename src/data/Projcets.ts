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
    type: 'image',
    title: 'SpeedCast',
    subtitle: 'better api client than axios.',
    link: 'speedcast',

    image: '/preview/speedcast.gif',
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
    description1: "I (He/Him) build digital experiences. I crafted VaayuJewels.com end to end — from frontend flows to backend logic. I thrive where design meets engineering, and I'm always up for shaping beautiful, functional web products. Got something cool in mind? Let’s connect↗",
    description2: "I (He/Him) design and develop websites. I built VaayuJewels.com from scratch—full-stack architecture↗",
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
    link: 'speedcast',
    title: 'SPEEDCAST API',
    poster: '/projects/speedcast/1.gif',
    subtitle: ' blazing fast API client with built-in caching',
    description1: "I (He/Him) built SpeedCast in TypeScript—a blazing‑fast API client with smart caching and built‑in rate limiting, so your modern JS apps stay snappy and resilient without you breaking a sweat↗",
    description2: "SpeedCast is my TypeScript‑powered API client crafted for speed: it handles request caching, rate limits itself automatically, and gives you rock‑solid typing out of the box—perfect for today’s JavaScript ecosystems↗",
    role: ['Developer.'],
    collaborators: ['Solo'],
    techStack: ['TypeScript'],
    timeline: '2025',
    rlinks: [
      {
        link: 'https://speedcast.heet.pro/',
        text: 'MAIN WEBSITE',
      },
      
    ],  
    data: [
      {
        image: "/projects/speedcast/2.png",
        description: 'install api client.'
      },
      {
        image: "/projects/speedcast/3.png",
        description: "A blazing fast API client with built-in caching, rate limiting, and TypeScript support for modern JavaScript applications."
      },
      {
        image: "/projects/speedcast/4.png",
        description: "With Speedcast API, you can focus on building your application while it handles the complex tasks like caching, rate limiting, and retry logic for you. Whether you're working on a frontend React app, Next.js project or a backend Node.js server, Speedcast API provides a consistent, powerful solution for API management."
      },
      {
        image: "/projects/speedcast/5.png",
        description: "BETTER THAN AXIOS"
      },
      {
        image: "/projects/speedcast/6.png",
        description: "Just import Speedcast Api."
      },
      {
        image: "/projects/speedcast/7.png",
        description: "Rate-limiting is now easy with speedcast api."
      },

    ]


  },





  {
    link: 'kafinao',
    title: 'Kafinao',
    poster: '/projects/kafinao/0.png',
    subtitle: "YOUR COFFEE SHOP'S NFT COLLECTION",
    description1: "Kafinao is my ongoing passion project—a live NFT gallery that captures the warmth and character of cafés from Seoul to São Paulo, all animated with buttery‑smooth GSAP magic. its based on world wide coffee shops↗",
    description2: "I’m building Kafinao from the ground up: a full‑stack NFT showcase inspired by coffee shops worldwide↗",
    role: ['Full Stack Developer.', 'Designer.'],
    collaborators: ['Solo'],
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript','GSAP','Framer-motion'],
    timeline: 'JAN 2025',
    rlinks: [
      {
        link: 'https://www.kafinao.store/',
        text: 'MAIN WEBSITE',
      },
      {
        link: 'https://www.google.com/search?q=kafinao.store',
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


