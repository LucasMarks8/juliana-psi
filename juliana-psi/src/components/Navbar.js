import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around h-10 items-center'>
            <Link href='#section1'>Home</Link>
            <Link href='#section2'>Por que?</Link>
            <Link href='#Section3'>Áreas de Atuação</Link>
            <Link href='#section4'>Quem sou</Link>
            <Link href='#section5'>Contato</Link>
    </div>
  )
}

export default Navbar