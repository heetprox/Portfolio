'use client'

import { Project, projectData, ProjectPageData, projectPageData } from '@/data/Projcets';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
    const { project } = useParams();

    const data: ProjectPageData[] = projectPageData.filter(element => element.link === project);

    return (
        <div className='flex flex-col w-full h-full'
            style={{
                padding: "0 clamp(0.5rem, 0.75vw, 240rem)",
                gap: "clamp(0.5rem, 2.25vw, 240rem)",
            }}>
            {/* {data.map((project, index) => ( */}
            <div className="flex w-full bg-[#131313] max-h-[90vh] h-auto    ">
                <Image
                    src={data[0].data[0].image}
                    className='w-full max-h-[90vh] h-auto object-cover'
                    alt="yo"
                    width={100}
                    height={100}
                />
            </div>

            <div className="flex min-h-[200vh] flex-col md:flex-row  w-full h-full" style={{
                position: 'relative',
                gap: "clamp(0.5rem, 0.75vw, 240rem)",

            }}>

                <div className="w-full md:w-[33%]"
                    style={{
                        position: 'sticky',
                        top: "clamp(0.5rem, 4vw, 240rem)",
                        height: 'fit-content',
                        alignSelf: 'flex-start'
                    }}
                >
                    <div className="text-white off uppercase tracking-wide leading-none"
                        style={{
                            fontSize: "clamp(1.5rem, 1.95vw, 240rem)",
                        }}
                    >
                        {data[0].title}
                    </div>
                    <h3
                        style={{
                            fontSize: "clamp(0.75rem, 0.5vw, 240rem)",
                            paddingTop: "clamp(0.25rem, 0.25vw, 240rem)",
                        }}
                        className="uppercase mono tracking-wide font-medium text-white/30">
                        {data[0].subtitle}
                    </h3>
                </div>


                <div className="w-full md:w-[67%] flex flex-col" style={{
                    minHeight: '200vh',
                    gap: "clamp(0.5rem, 0.75vw, 240rem)",
                    fontSize: "clamp(0.75rem, 0.9vw, 240rem)",

                }}
                >
                    <div className="flex w-full flex-col md:flex-row"
                        style={{
                            gap: "clamp(0.5rem, 0.75vw, 240rem)",
                        }}
                    >
                        <div className="flex w-full md:w-[50%] flex-col">
                            <p className="mb-4  leading-tight" >
                                {data[0].description1}
                            </p>
                        </div>

                        <div className="md:flex md:w-[50%] hidden w-full flex-col">
                            <p className="mb-4  leading-tight" >
                                {data[0].description2}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:flex w-full"
                        style={{
                            gap: "clamp(0.5rem, 0.75vw, 240rem)",
                        }}
                    >
                        <div className="flex flex-col w-full md:w-1/4"

                        >
                            <h3
                                style={{
                                    fontSize: "clamp(0.75rem, 0.5vw, 240rem)",
                                    paddingTop: "clamp(0.25rem, 0.25vw, 240rem)",
                                }}
                                className="uppercase mono tracking-wide font-medium text-white/40">
                                ROLE
                            </h3>
                            <p className="mb-4   leading-tight flex flex-col" >
                                {data[0].role.map((role, index) => (
                                    <span key={index}>{role}</span>
                                ))}
                            </p>
                        </div>



                        <div className="flex flex-col w-full md:w-1/4"

                        >
                            <h3
                                style={{
                                    fontSize: "clamp(0.75rem, 0.5vw, 240rem)",
                                    paddingTop: "clamp(0.25rem, 0.25vw, 240rem)",
                                }}
                                className="uppercase mono tracking-wide font-medium text-white/40">
                                Collaborators
                            </h3>
                            <p className="mb-4  leading-tight" >
                                {data[0].collaborators.map((collaborator, index) => (
                                    <span key={index}>{collaborator}</span>
                                ))}
                            </p>
                        </div>




                        <div className="flex flex-col w-full md:w-1/4"

                        >
                            <h3
                                style={{
                                    fontSize: "clamp(0.75rem, 0.5vw, 240rem)",
                                    paddingTop: "clamp(0.25rem, 0.25vw, 240rem)",
                                }}
                                className="uppercase mono tracking-wide font-medium text-white/40">
                                Duration
                            </h3>
                            <p className="mb-4  leading-tight" >
                                {data[0].timeline}
                            </p>
                        </div>




                        <div className="flex flex-col w-full md:w-1/4"

                        >
                            <h3
                                style={{
                                    fontSize: "clamp(0.75rem, 0.5vw, 240rem)",
                                    paddingTop: "clamp(0.25rem, 0.25vw, 240rem)",
                                }}
                                className="uppercase mono tracking-wide font-medium text-white/40">
                                TOOLS
                            </h3>
                            <p className="mb-4   leading-tight" >
                                {data[0].techStack.map((tech, index) => (
                                    <span key={index}>{tech} <br /></span>
                                ))}
                            </p>
                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col"
                        style={{
                            gap: "clamp(0.5rem, 0.75vw, 240rem)",
                            paddingTop: "clamp(0.5rem, 1.75vw, 240rem)",
                        }}
                    >

                        <div className="flex flex-col md:w-1/2 w-full">
                            <Link
                                href={data[0].rlinks[0].link}
                                style={{
                                    fontSize: "clamp(0.75rem, 0.75vw, 240rem)",
                                    padding: "clamp(1rem, 0.75vw, 240rem)",
                                }}
                                className="uppercase mono text-left font-normal flex justify-between text-white/70 bg-neutral-300/5 rounded-md cursor-pointer hover:bg-neutral-200/10 transition-all duration-100 hover:text-white">
                                <div>{data[0].rlinks[0].text}</div>
                                <div className="scale-150">↗</div>
                            </Link>

                        </div>
                        <div className="flex flex-col md:w-1/2 w-full">
                            <Link
                                href={data[0].rlinks[1].link}
                                style={{
                                    fontSize: "clamp(0.75rem, 0.75vw, 240rem)",
                                    padding: "clamp(1rem, 0.75vw, 240rem)",
                                }}
                                className="uppercase mono text-left font-normal flex justify-between text-white/70 bg-neutral-300/5 rounded-md cursor-pointer hover:bg-neutral-200/10 transition-all duration-100 hover:text-white">
                                <div>{data[0].rlinks[1].text}</div>
                                <div className="scale-150">↗</div>
                            </Link>

                        </div>
                    </div>

                    {data[0].data.map((data, index) => (
                        <div key={index} className="flex flex-col w-full h-full  "
                            style={{
                                paddingTop: "clamp(0.5rem, 0.75vw, 240rem)",
                            }}
                        >
                            <Image
                                src={data.image}
                                className=' h-auto w-full object-cover '
                                alt="IF you are not seeing image this than you shouln't be."
                                width={100}
                                height={100}
                            />
                            <h3
                                style={{
                                    fontSize: "clamp(0.75rem, 0.75vw, 240rem)",
                                    paddingTop: "clamp(0.25rem, 0.75vw, 240rem)",
                                }}
                                className="uppercase mono tracking-wide font-medium text-white/50">
                                {data.description}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
