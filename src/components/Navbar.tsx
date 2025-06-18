import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  flex justify-between items-center bg-black text-white z-50"
    style={{
        fontSize: "clamp(1rem, 1vw, 240rem)",
        padding: "clamp(1rem, 1vw, 240rem)",
    }}
    >
      <div className="text-left">
        <h1 className=" font-medium">Joseph Zhang</h1>
      </div>
      <div className="text-center">
        <h2 className=" font-medium">Interaction Designer</h2>
      </div>
      <div className="text-right">
        <p className=" font-medium">New York, NY</p>
      </div>
    </nav>
  )
}

export default Navbar
