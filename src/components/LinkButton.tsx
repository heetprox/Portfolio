import { Link } from 'next-view-transitions'
import React from 'react'

const LinkButton = ({link, text}: {link: string, text: string}) => {
  return (
    <div className="flex flex-col md:w-1/2 w-full">
    <Link
        href={link}
        style={{
            fontSize: "clamp(0.75rem, 0.75vw, 240rem)",
            padding: "clamp(1rem, 0.75vw, 240rem)",
        }}
        className="uppercase mono text-left font-normal flex justify-between text-white/70 bg-neutral-300/5 rounded-md cursor-pointer hover:bg-neutral-200/10 transition-all duration-100 hover:text-white">
        <div>{text}</div>
        <div className="scale-150">↗</div>
    </Link>

</div>
  )
}

export default LinkButton
