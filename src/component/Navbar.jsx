import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex justify-between around pt-[14px] px-16'>
        <span className='text-xl font-semibold'>
            CC
        </span>
        
        <ul className='flex gap-7'>
            <li>
                <a href="#">Menu</a>
            </li>
            <li>
                <a href="#">Our Service</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
  )
}
