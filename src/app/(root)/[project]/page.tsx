'use client'

import { Project, projectData } from '@/data/Projcets';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
    const pathname = usePathname();
    const project = pathname ? pathname.split('/').pop() : '';

    // Find matching projects
    const data: Project[] = projectData.filter(element => element.link === project);

    return (
        <>
            {/* {data.map((project, index) => ( */}
                <div className="flex w-full bg-[#131313] h-[90vh]">
                    <Image 
                        src="/projects/vaayujewels.svg" 
                        className='w-full h-[90vh] object-cover' 
                        alt="yo" 
                        width={100} 
                        height={100} 
                    />
                </div>

                <div className="flex"></div>
            {/* ))} */}
        </>
    )
}

export default page
