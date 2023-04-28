import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '../../public/icons/menu.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const setMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  }

  console.log(isMenuOpen)

  return (
    <div>
      <div className='flex flex-col min-[941px]:hidden'>
        <button className='ml-10 mt-5 mb-5' onClick={setMenu}>
          <Image src={MenuIcon} width={25} alt='' />
        </button>
        {isMenuOpen && (
          <div className='flex flex-col gap-y-2 min-[320px]:text-center mb-5'>
            <Link href='#section1' className='text-white'>HOME</Link>
            <Link href='#section2' className='text-white'>POR QUE?</Link>
            <Link href='#Section3' className='text-white'>ÁREAS DE ATUAÇÃO</Link>
            <Link href='#section4' className='text-white'>QUEM SOU</Link>
            <Link href='#section5' className='text-white'>CONTATO</Link>
          </div>
        )}
      </div>
      <div className='flex justify-around h-10 items-center min-[320px]:text-center max-[940px]:hidden'>
        <Link href='#section1' className='text-white'>HOME</Link>
        <Link href='#section2' className='text-white'>POR QUE?</Link>
        <Link href='#Section3' className='text-white'>ÁREAS DE ATUAÇÃO</Link>
        <Link href='#section4' className='text-white'>QUEM SOU</Link>
        <Link href='#section5' className='text-white'>CONTATO</Link>
      </div>
    </div>
  )
}

export default Navbar