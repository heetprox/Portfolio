import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-black text-white z-50">
      <div className="flex-1 text-left">
        <h1 className="text-lg font-medium">Joseph Zhang</h1>
      </div>
      <div className="flex-1 text-center">
        <h2 className="text-lg font-medium">Interaction Designer</h2>
      </div>
      <div className="flex-1 text-right">
        <p className="text-lg font-medium">New York, NY</p>
      </div>
    </nav>
  )
}

export default Navbar
