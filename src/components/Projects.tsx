import React from 'react'
import { projectData } from '@/data/Projcets'

const Projects = () => {
  return (
    <div className="w-full"
    style={{
        padding: "clamp(0.75rem, 0.75vw, 240rem) clamp(0.5rem, 0.75vw, 240rem)",
    }}
    >
  <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[1fr] bg-neutral-900"
  style={{ gridAutoFlow: 'dense',

        gap:"clamp(0.5rem, 0.5vw, 240rem)",
      }}
      >
        {projectData.map((project) => (
          <div 
            key={project.id}
            className="group relative overflow-hidden cursor-pointer" 
            style={{ 
              gridColumn: project.gridColumn,
              gridRow: project.gridRow
            }}
          >
            {project.type === 'image' ? (
              <img
              src={project.image}
              alt={project.title}
              className={`w-full h-auto ${project.logoImage ? 'p-8' : ''}`}
              loading="lazy"
            />
            ) : (
              <video
              src={project.image}
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-auto ${project.logoImage ? 'p-8' : ''}`}
            />
            )}
            
            <div className="absolute bottom-0 left-0 right-0  h-20 pointer-events-none"></div>
            
            {project.locked && (
              <div className="absolute top-4 right-4 bg-[#2d3748] text-white px-3 py-1 rounded-md text-xs font-bold">
                LOCKED
              </div>
            )}
            
            <div className=" p-4 text-left w-full"
            style={{
              padding: "clamp(0.5rem, 0.5vw, 240rem) 0 clamp(0.5rem, 0.75vw, 240rem)",
            }}
            >
              <h3
              style={{
                
                fontSize: "clamp(0.8rem, 0.7vw, 240rem)",
              }}
              className="text-base font-normal mono tracking-tight uppercase text-white">{project.title}</h3>
              {project.subtitle && (
                <p
                style={{
                    fontSize: "clamp(0.8rem, 0.6vw, 240rem)",
                  }}
                className="mono uppercase text-white/50 tracking-wide mt-0.5">{project.subtitle}</p>
              )}
            </div>
            
            {/* Hover state */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 "></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
