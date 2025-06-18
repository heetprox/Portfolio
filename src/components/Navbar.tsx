import React from 'react'

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 w-full flex justify-between items-center  bg-black text-white z-50"
            style={{
                fontSize: "clamp(0.8rem, 0.9vw, 240rem)",
                padding: "clamp(0.75rem, 0.75vw, 240rem) clamp(0.5rem, 0.75vw, 240rem)",
            }}
        >
            <div className="flex w-1/2">
                <div className="text-left">
                    <h1 className=" tracking-tight">Joseph Zhang</h1>
                </div>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="text-left w-[30%]">
                    <h2 className=" ">Full-Stack Developer</h2>
                </div>
                <div className="text-left w-[70%]">
                    <p className=" ">Ahmedabad, IN</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
