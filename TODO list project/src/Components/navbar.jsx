import React from 'react'

const navbar = () => {
  return (
    <nav className='flex md:flex justify-around bg-slate-500 text-white text-xl py-3 gap-8'>
      <span className=" text-bold md:text-xl font-bold mx-10">iTodo</span>
        <ul className='flex ml-5 md-flex gap-6 mx-9'>
            <li className='cursor-pointer hover:font-bold'><a href="/">Home</a></li>
            <li className='cursor-pointer hover:font-bold '><a href="/">Your Todos</a></li>
        </ul>
      
    </nav>
  )
}

export default navbar
