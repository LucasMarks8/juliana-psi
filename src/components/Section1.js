import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <div id='section1' className='flex flex-col h-[48rem] justify-center items-center gap-x-20 max-xl:justify-center max-[940px]:flex-col max-[940px]:h-fit'>
      <div className='flex w-full justify-evenly mt-20 max-xl:justify-evenly max-[940px]:flex-col max-[940px]:items-center max-[940px]:h-fit'>
        <div className='max-[940px]:mt-10'>
          <img src='/images/logo1.jpg' alt='' width={'350px'} className='mt-6 mb-6 border border-white rounded-xl' />
        </div>
        <div className='max-[940px]:mt-10'>
          <img src='/images/juliana1.jpeg' alt='' width={'250px'} className='mt-6 mb-6' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-between gap-y-6'>
        <div className='text-[25px] font-serif flex max-[495px]:text-xl'>
          Torne-se a melhor versão de si mesmo(a).
        </div>
        <hr className='w-80 h-0.5 my-2 border-0 rounded dark:bg-gray-50'></hr>
        <div className='text-xl font-serif'>
          Sua dose diária de amor próprio.
        </div>
        <hr className='w-80 h-0.5 my-2 border-0 rounded dark:bg-gray-50'></hr>
        <div className='flex justify-around w-full mb-10 gap-x-5 max-[940px]:mb-10 max-[940px]:flex-col items-center gap-y-2'>
          <Link href='#section2' className='flex justify-center items-center w-32 rounded-full hover:text-gray-700 font-serif'>
            Saiba Mais
          </Link>
          <Link href="#section5" className='flex justify-center items-center w-32 rounded-full hover:text-gray-700 font-serif'>
            Contatos
          </Link>
          <div className='flex gap-x-2 items-center'>
            <div>
              <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
                <img src='/icons/whatsapp.png' alt='' width={"25px"} height={"25px"} />
              </Link>
            </div>
            <div>
              <Link href={'https://wa.me/5511967422863'} target={'_blank'} className='flex justify-center items-center hover:text-gray-700 font-serif'>
                Agendamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1