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

  return (
    <div>
      <div className='flex flex-col min-[941px]:hidden'>
        <button className='ml-10 mt-5 mb-5' onClick={setMenu}>
          <Image src={MenuIcon} width={25} alt='' />
        </button>
        {isMenuOpen && (
          <div className='flex flex-col gap-y-2 min-[320px]:text-center mb-5 font-serif'>
            <Link href='#section1' onClick={setMenu}>HOME</Link>
            <Link href='#section2' onClick={setMenu}>POR QUE?</Link>
            <Link href='#Section3' onClick={setMenu}>ÁREAS DE ATUAÇÃO</Link>
            <Link href='#section4' onClick={setMenu}>QUEM SOU</Link>
            <Link href='#section5' onClick={setMenu}>CONTATO</Link>
          </div>
        )}
      </div>
      <div className='flex justify-around h-10 items-center min-[320px]:text-center max-[940px]:hidden font-serif'>
        <Link href='#section1'>HOME</Link>
        <Link href='#section2'>POR QUE?</Link>
        <Link href='#Section3'>ÁREAS DE ATUAÇÃO</Link>
        <Link href='#section4'>QUEM SOU</Link>
        <Link href='#section5'>CONTATO</Link>
      </div>
    </div>
  )
}

export default Navbar