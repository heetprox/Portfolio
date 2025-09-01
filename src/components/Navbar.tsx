'use client'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathname = usePathname()
    const isHome = pathname === '/'
    return (
        <nav className="sticky top-0 left-0 border-b bg-[#131313] border-white/10 w-full flex justify-between items-center  text-white z-[999]"
            style={{
                fontSize: "clamp(0.8rem, 0.9vw, 240rem)",
                padding: "clamp(0.75rem, 0.75vw, 240rem) clamp(0.75rem, 0.75vw, 240rem)",
                gap: "clamp(1rem, 1vw, 240rem)",
            }}
        >
            <div className="flex relative z-[9999] w-[35%] md:w-1/2">
                <Link href="/" className="text-left">
                    <h1 className=" tracking-tight">Heet Pro</h1>
                </Link>
            </div>
            <div className="flex w-[65%] md:w-1/2 md:justify-start justify-between">
                <div className="text-left w-[70%] md:w-[35%] items-center flex">
                    <h2 className=" ">Full-Stack Developer</h2>
                </div>
                <div className="md:flex hidden text-left w-[55%]">
                    <p className=" ">Ahmedabad, In</p>
                </div>
                {!isHome && (
                    <Link href="/" className="flex text-white cursor-pointer w-[10%] justify-end">
                        <X className="text-white"/>
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar
