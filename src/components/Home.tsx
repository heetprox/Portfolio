import React from 'react'
import { LanyardResponse } from 'react-use-lanyard'
import { teamData } from '@/data'
import ActivityCard from './ActivityCard';
import Link from 'next/link';
import JsonLd from './JsonLd';

const insertSuperscripts = (description: string, superscripts?: { text: string; position: number }[]) => {
  if (!superscripts || superscripts.length === 0) return description;

  const sorted = [...superscripts].sort((a, b) => b.position - a.position);
  let result = description;

  sorted.forEach(sup => {
    result =
      result.substring(0, sup.position) +
      `<span class="text-xs align-super">${sup.text}</span>` +
      result.substring(sup.position);
  });

  return result;
};

const Home = ({ activity }: { activity: LanyardResponse | undefined }) => {
  // Person structured data for Heet Vavadiya
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Heet Vavadiya",
    "url": "https://heet.pro",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://github.com/heetvadiya",
      "https://linkedin.com/in/heetvadiya",
      "https://twitter.com/heetvavadiya"
    ],
    "knowsAbout": ["Web Development", "React", "Next.js", "TypeScript", "UI/UX Design"],
    "alumniOf": "VGEC, Ahmedabad",
    "email": "heetvavadiya099@gmail.com"
  };

  return (
    <div className="min-h-[40vh] bg-[#131313] text-white pt-16">
      <JsonLd data={personData} />
      <div className="mx-auto flex "
        style={{
          fontSize: "clamp(0.85rem, 0.9vw, 240rem)",
          padding: "clamp(0.75rem, 0.75vw, 240rem) clamp(0.75rem, 0.75vw, 240rem)",
        }}>

        <div className="w-full flex flex-col md:flex-row
        "
          style={{
            gap: "clamp(1rem, 1vw, 240rem)",
          }}
        >
          <div className="flex flex-col md:w-[50%] w-full"
            style={{
              gap: "clamp(1rem, 1vw, 240rem)",
            }}
          >

            <h3
              style={{
                fontSize: "clamp(0.85rem, 0.9vw, 240rem)",

              }}
              className=" medium-font text-white font-medium mb-4">{"Full-Stack | Web3 "}</h3>
            <h3
              style={{
                fontSize: "clamp(0.75rem, 0.7vw, 240rem)",

              }}
              className="uppercase mono font-medium mb-4 text-white/40">About</h3>
            <p className="mb-4 md:w-[70%] w-full leading-tight" >
              {" A full-stack developer who builds scalable applications people actually use. He loves creating creative frontends, while scaling backends. Passionate about real-world problems, I'm constantly exploring new ideas—whether it's for smoother user experience or user's enjoyment. I currently studying Computer Engineering at VGEC, Ahmedabad. If you have an interesting idea, please   "} <Link href="mailto:heetvavadiya099@gmail.com" className='hover:text-[#FDE037] hover:border-b hover:border-[#FDE037] border-dotted cursor-pointer'>get in touch↗.</Link>
            </p>

            <div className=" p-4  w-fit">
              <ActivityCard userId="1118212847613247558" initialData={activity} />
            </div>
          </div>

         
        </div>
      </div>
    </div>
  )
}

export default Home
