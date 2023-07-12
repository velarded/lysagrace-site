'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
 
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    };

  return (
    <nav className="w-full fixed z-[100] bg[#ecf0f3] shadow-xl h-20">
        <div className="flex items-center justify-between h-full w-fill">
            <Link href="/" >
                <Image src={logo} alt="logo" width='80' height='80' priority/>
            </Link>
            <div className='mr-6'>
                <AiOutlineMenu onClick={handleMenu} className='sm:hidden text-2xl cursor-pointer'/>
            </div>
        </div>
        {/* Mobile Version Listed Items */}
        <div className={menuOpen ? 'left-0 top-0 w-[65%] h-screen relative bg-[#ecf0f3] ease-in duration-500 flex flex-col justify-start z-50' : 'hidden'}>
        </div>
    </nav>
  )
}

export default Navbar;