import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center gap-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-10 items-center'>
      <div>
      <img src='/icons/direito-autoral.png' alt='' width={'25px'} height={'25px'}/>
      </div>
      <div className='text-white'>
      <p>Created by Lucas Marques</p>
      </div>
    </div>
  )
}

export default Footer