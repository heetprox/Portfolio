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
        <div className='flex flex-col w-full h-full'
            style={{
                padding: "0 clamp(0.5rem, 0.75vw, 240rem)",
                gap: "clamp(0.5rem, 2.25vw, 240rem)",
            }}>
            {/* {data.map((project, index) => ( */}
            <div className="flex w-full bg-[#131313] max-h-[90vh] h-auto    ">
                <Image
                    src="/projects/vaayujewels.svg"
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
                    <div className="text-white off leading-none"
                        style={{
                            fontSize: "clamp(1.5rem, 1.95vw, 240rem)",
                        }}
                    >
                        VAAYU JEWLES
                    </div>
                    <h3
                        style={{
                            fontSize: "clamp(0.75rem, 0.5vw, 240rem)",
                            paddingTop: "clamp(0.25rem, 0.25vw, 240rem)",
                        }}
                        className="uppercase mono tracking-wide font-medium text-white/30">
                        A Jewellery Store
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
                                Jo (He/Him) designs interfaces. He thrives in complex, ambiguous problem spaces focused around interactive media, digital tooling, and multimodal interaction.  If you have an interesting idea, please get in touch↗.
                            </p>
                        </div>

                        <div className="md:flex md:w-[50%] hidden w-full flex-col">
                            <p className="mb-4  leading-tight" >
                                Jo (He/Him) designs interfaces. He thrives in complex, ambiguous problem If you have an interesting idea, please get in touch↗.
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
                            <p className="mb-4  leading-tight" >
                                Full Stack Developer.
                                <br />
                                Designer.
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
                                Harshil Madaliya
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
                                {"(SEP-NOV) 2024 "}
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
                                Next.js (App Router) (Api).
                                <br />
                                Framer-motion.
                                <br />
                                Tailwind CSS.
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
                            <button
                                style={{
                                    fontSize: "clamp(0.75rem, 0.75vw, 240rem)",
                                    padding: "clamp(1rem, 0.75vw, 240rem)",
                                }}
                                className="uppercase mono text-left font-normal flex justify-between text-white/70 bg-neutral-300/5 rounded-md cursor-pointer hover:bg-neutral-200/10 transition-all duration-100 hover:text-white">
                                    <div>MAIN WEBSITE</div>
                                    <div className="scale-150">↗</div>
                            </button>
                           
                        </div>
                        <div className="flex flex-col md:w-1/2 w-full">
                            <button
                                style={{
                                    fontSize: "clamp(0.75rem, 0.75vw, 240rem)",
                                    padding: "clamp(1rem, 0.75vw, 240rem)",
                                }}
                                className="uppercase mono text-left font-normal flex justify-between text-white/70 bg-neutral-300/5 rounded-md cursor-pointer hover:bg-neutral-200/10 transition-all duration-100 hover:text-white">
                                    <div>SEO</div>
                                    <div className="scale-150">↗</div>
                            </button>
                           
                        </div>
                    </div>


                    <div className="flex flex-col w-full h-full  "
                    style={{
                        paddingTop: "clamp(0.5rem, 0.75vw, 240rem)",
                    }}
                    >
                        <Image
                            src="/projects/vaayo.png"
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
                                Multimodal search with the ability to give follow-up queries.
                            </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
