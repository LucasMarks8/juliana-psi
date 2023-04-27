import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <div id='section1' className='border boder-black flex h-[42rem] bg-brown-50 justify-center items-center gap-x-20'>
      <div>
        <img src='/images/juliana1.jpeg' alt='' className='h-[40rem]' />
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-[40px]'>
          Juliana Camanzano
        </div>
        <div className='text-lg'>
          Psicóloga
        </div>
        <div className='text-sm'>
          CRP 06/118188
        </div>
        <hr className='w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-50'></hr>
        <div className='italic'>
          Autoconhecimento / Autoconfiança / Autoaceitação
        </div>
        <hr className='w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-50'></hr>
        <div className='flex justify-around w-full gap-x-5'>
          <Link href='#section2' className='flex justify-center border-4 border-gray-50 w-32 rounded-full'>
            Saiba Mais
          </Link>
          <div className='flex gap-x-2 items-center'>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
                            <img src='/icons/whatsapp.png' alt='' width={"25px"} height={"25px"} />
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'} className='flex justify-center border-4 border-ivory-50 w-40 rounded-full'>
                            Agendamento
                        </Link>
                    </div>
                </div>
          <Link href="#section5" className='flex justify-center border-4 border-gray-50 w-32 rounded-full'>
            Contatos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section1