import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <div id='section1' className='flex h-[42rem bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 justify-center items-center gap-x-20 max-xl:justify-center max-[940px]:flex-col max-[940px]:h-fit'>
      <div className='max-[940px]:mt-10'>
        <img src='/images/juliana1.jpeg' alt='' className='h-[40rem]' />
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-[40px] text-gray-700'>
          Juliana Camanzano
        </div>
        <div className='text-lg text-gray-700'>
          Psicóloga
        </div>
        <div className='text-sm text-gray-700'>
          CRP 06/118188
        </div>
        <hr className='w-64 h-1 my-8 border-0 rounded dark:bg-gray-700'></hr>
        <div className='italic text-gray-700 text-lg'>
          Autoconhecimento / Autoconfiança / Autoaceitação
        </div>
        <hr className='w-64 h-1 my-8 border-0 rounded dark:bg-gray-700'></hr>
        <div className='flex justify-around w-full gap-x-5 max-[940px]:mb-10'>
          <Link href='#section2' className='flex justify-center items-center border-2 border-gray-700 w-32 rounded-full hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 hover:text-black text-gray-700'>
            Saiba Mais
          </Link>
          <div className='flex gap-x-2 items-center'>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
                            <img src='/icons/mensagem-de-telefone.png' alt='' width={"25px"} height={"25px"} />
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'} className='flex justify-center items-center border-2 border-gray-700 w-40 rounded-full hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 hover:text-black text-gray-700'>
                            Agendamento
                        </Link>
                    </div>
                </div>
          <Link href="#section5" className='flex justify-center items-center border-2 border-gray-700 w-32 rounded-full hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 hover:text-black text-gray-700'>
            Contatos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section1