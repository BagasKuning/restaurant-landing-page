import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex justify-between around lg:pt-[14px] py-3 px-16'>
        <span className='text-xl font-semibold'>
            CC
        </span>
        
        <ul className='flex gap-7'>
            <li>
                <a href="#home">Menu</a>
            </li>
            <li>
                <a href="#service">Our Service</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
