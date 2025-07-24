import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex off flex-col items-center justify-center'>
      <div className='2xl:text-4xl flex text-lg sm:text-lg md:text-xl xl:text-xl tracking-wide font-light uppercase'>Page not found—

        <Link href='/'>
          <p className='2xl:text-4xl text-lg sm:text-lg md:text-xl xl:text-xl  text-[#FDE037] tracking-wide font-light hover:underline transition-all duration-500  underline-offset-4 uppercase'>Go HOME↗</p>
        </Link>
      </div>
    </div>
  )
}

export default page
