'use client'
import React, { useState, useEffect, useRef } from 'react'

const Footer = () => {
  const [position, setPosition] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const baseText = "CREATIVE_DEVELOPER_▞▚▞▚▞▚▞_NEXT.JS_VERCEL_▞▚▞▚▞▚▞_INPUT_MONO_▞▚▞▚▞▚▞_Copyright_2025_▞▚▞▚▞▚▞_"

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setPosition(prev => prev - 10)
      }, 300)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  useEffect(() => {
    if (position <= -2000) {
      setPosition(0)
    }
  }, [position])

  return (
    <div className="flex flex-col w-full">
      <div className='h-[20vh] bg-[#222222] w-full relative flex flex-col items-center justify-center overflow-hidden'>
        <div className="flex flex-col md:flex-row w-[95%]   h-[15vh]">

          <div className=" flex h-fit 
        
           items-center"
            //gap-2 sm:gap-4 md:gap-4 xl:gap-6 2xl:gap-0 
            style={{
              fontSize: "clamp(0.75rem, 0.8vw, 240rem)"
            }}
          >
            <div className="border-[#FDE037] mono text-[#FDE037] border rounded-full"
              style={{
                padding: "clamp(0.25rem, 0.25vw, 20rem) clamp(0.5rem, 0.5vw, 20rem)",
              }}
            >
              {"v1.0.0"}
            </div>
            <div className="flex text-white/50 mono scale-90 tracking-tight uppercase">
              Last updated 2025-07-23
            </div>

          </div>



        </div>

      </div>

      <div className="w-full overflow-hidden  "
        style={{
          padding: "clamp(0.5rem, 0.5vw, 20rem) 0"
        }}
      >
        <div
          className="uppercase hover:text-[#FDE037] pb-2 cursor-pointer text-white/50 scale-y-[0.9] whitespace-nowrap"
          style={{
            fontSize: "clamp(0.75rem, 0.8vw, 240rem)",
            fontFamily: 'monospace',
            transform: `translateX(${position}px)`,
            display: 'inline-block'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {baseText.repeat(20)}
        </div>
      </div>
    </div>

  )
}

export default Footer