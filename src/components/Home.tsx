import React from 'react'
import { LanyardResponse } from 'react-use-lanyard'
import Navbar from './Navbar'

const Home = ({ activity }: { activity: LanyardResponse | undefined }) =>  {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="uppercase text-sm font-bold mb-4 text-gray-400">About</h3>
            <p className="text-lg mb-4">
              Jo (He/Him) designs interfaces. He thrives in complex, ambiguous problem
              spaces focused around interactive media, digital tooling, and multimodal
              interaction. He studied Communication Design and Human-Computer
              Interaction at Carnegie Mellon University, an experience he holds fondly and will
              cherish for the rest of his life. If you have an interesting idea, please get in touch.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="uppercase text-sm font-bold mb-4 text-gray-400">Team</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold">Notion</h4>
              <p className="text-lg">2025 - Present</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold">Azuki</h4>
              <p className="text-lg">2023 - 2025</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold">Independent Practice</h4>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold">Skiff</h4>
              <p className="text-lg">2022 - 2023</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold">Apple</h4>
              <p className="text-lg">2020 - 2021</p>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="uppercase text-sm font-bold mb-4 text-gray-400">Description</h3>
            
            <div className="mb-6">
              <p className="text-lg">Building beautiful tools for your life's work.</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg">First full-time design hire. Scaled design team to 5 people. Built Anime.com, Animee, and interactive experiences for the Azuki IP.</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg">Design consulting for emerging AI and productivity companies. Notable clients include Anysphere (Cursor AI), Rox, and Brain Technologies (Natural AI).</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg">First full-time design hire. 0→1 design for Email, Editor, Drive, Calendar. Scaled Skiff Mail to 1M+ users. Recently acquired by Notion HQ.</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg">Two summers at Apple working on conversational AI interfaces for Siri in the AI/ML Organization. Explored multimodal patterns and new behaviors empowered by natural language input.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
