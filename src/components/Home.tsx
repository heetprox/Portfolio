import React from 'react'
import { LanyardResponse } from 'react-use-lanyard'
import Navbar from './Navbar'

const Home = ({ activity }: { activity: LanyardResponse | undefined }) => {
    return (
        <div className="min-h-screen bg-black text-white pt-16">

            <div className=" mx-auto px-4 py-10"
                style={{
                    fontSize: "clamp(0.8rem, 0.85vw, 240rem)",
                    padding: "clamp(0.75rem, 0.75vw, 240rem) clamp(0.5rem, 0.75vw, 240rem)",
                    marginTop: "clamp(0.75rem, 0.75vw, 240rem)",
                }}>
                <div className="w-full flex">
                    <div className="col-span-1 w-[50%]">
                        <h3 
                        style={{
                            fontSize: "clamp(0.5rem, 0.75vw, 240rem)",
                            paddingBottom: "clamp(0.5rem, 0.75vw, 240rem)",
                        }}
                        className="uppercase mono tracking-wide font-medium mb-4 text-white/40">About</h3>
                        <p className=" mb-4 w-[65%] leading-tight">
                        Jo (He/Him) designs interfaces. He thrives in complex, ambiguous problem spaces focused around interactive media, digital tooling, and multimodal interaction. He studied Communication Design↗ and Human-Computer Interaction↗ at Carnegie Mellon University, an experience he holds fondly and will cherish for the rest of his life. If you have an interesting idea, please get in touch↗.
                        </p>
                    </div>

                    <div className="flex w-[50%] ">
                        <div className="w-[30%] ">
                        <h3 
                        style={{
                            fontSize: "clamp(0.5rem, 0.75vw, 240rem)",
                            paddingBottom: "clamp(0.5rem, 0.75vw, 240rem)",
                        }}
                        className="uppercase mono tracking-wide font-medium mb-4 text-white/40">TEAM</h3>

                            <div className="mb-6">
                                <h4 className=" ">Notion</h4>
                                <p className="">2025 - Present</p>
                            </div>

                            <div className="mb-6">
                                <h4 className=" ">Azuki</h4>
                                <p className="">2023 - 2025</p>
                            </div>

                            <div className="mb-6">
                                <h4 className=" ">Independent Practice</h4>
                            </div>

                            <div className="mb-6">
                                <h4 className=" ">Skiff</h4>
                                <p className="">2022 - 2023</p>
                            </div>

                            <div className="mb-6">
                                <h4 className=" ">Apple</h4>
                                <p className="">2020 - 2021</p>
                            </div>
                        </div>

                        <div className="col-span-1 w-[70%]">
                        <h3 
                        style={{
                            fontSize: "clamp(0.5rem, 0.75vw, 240rem)",
                            paddingBottom: "clamp(0.5rem, 0.75vw, 240rem)",
                        }}
                        className="uppercase mono tracking-wide font-medium mb-4 text-white/40">DESCRIPTION</h3>

                            <div className="mb-6">
                                <p className="">Building beautiful tools for your life's work.</p>
                            </div>

                            <div className="mb-6">
                                <p className="">First full-time design hire. Scaled design team to 5 people. Built Anime.com, Animee, and interactive experiences for the Azuki IP.</p>
                            </div>

                            <div className="mb-6">
                                <p className="">Design consulting for emerging AI and productivity companies. Notable clients include Anysphere (Cursor AI), Rox, and Brain Technologies (Natural AI).</p>
                            </div>

                            <div className="mb-6">
                                <p className="">First full-time design hire. 0→1 design for Email, Editor, Drive, Calendar. Scaled Skiff Mail to 1M+ users. Recently acquired by Notion HQ.</p>
                            </div>

                            <div className="mb-6">
                                <p className="">Two summers at Apple working on conversational AI interfaces for Siri in the AI/ML Organization. Explored multimodal patterns and new behaviors empowered by natural language input.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
