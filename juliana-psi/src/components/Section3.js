import Link from 'next/link'
import React from 'react'

const Section3 = () => {
    return (
        <div id='Section3' className='flex flex-col gap-y-2 h:fit bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 max-[940px]:h-fit'>
            <div className='flex justify-center mt-10 mb-8'>
                <div className='flex items-center w-[20rem] justify-center bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 rounded-full text-gray-700'>
                    ÁREAS DE ATUAÇÃO
                </div>
            </div>
            <div className='flex flex-col items-center justify-center h-fit gap-2 max-[940px]:h-fit'>
                <div className='flex items-center justify-center h-fit gap-2 max-[940px]:grid max-[940px]:grid-cols-1 max-[940px]:h-fit max-[940px]:mt-4'>
                    <div className='flex flex-col text-center items-center justify-around h-72 w-72 p-1 bg-white rounded-lg hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 hover:border-brown-50 hover:border-4'>
                        <div className='flex justify-center h-48 w-48 rounded-full'>
                            <img src='/images/terapia-individual.jpeg' width={"300px"} height={"300px"} className='rounded-full hover:border-brown-50 hover:border-4' />
                        </div>
                        <div className='text-xl text-gray-700'>
                            Terapia Individual
                        </div>
                    </div>
                    <div className='flex flex-col h-72 text-center items-center justify-around w-72 p-1 bg-white rounded-lg hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:border-brown-50 hover:border-4'>
                        <div className='flex justify-center h-48 w-48'>
                            <img src='/images/terapia-de-casal.jpeg' width={"300px"} height={"300px"} className='rounded-full hover:border-brown-50 hover:border-4' />
                        </div>
                        <div className='text-xl text-gray-700'>
                            Terapia de Casal
                        </div>
                    </div>
                    <div className='flex flex-col h-72 text-center items-center justify-around w-72 p-1 bg-white rounded-lg hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:border-brown-50 hover:border-4'>
                        <div className='flex justify-center h-48 w-48'>
                            <img src='/images/terapia-infantil.jpeg' width={"300px"} height={"300px"} className='rounded-full hover:border-brown-50 hover:border-4' />
                        </div>
                        <div className='text-xl text-gray-700'>
                            Terapia Infantil
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col items-center justify-center h-fit gap-2 max-[940px]:h-fit'>
                <div className='flex items-center justify-center h-fit gap-2 max-[940px]:grid max-[940px]:grid-cols-1 max-[940px]:h-fit'>
                    <div className='flex flex-col h-72 text-center items-center justify-around w-72 p-1 bg-white rounded-lg hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:border-brown-50 hover:border-4'>
                        <div className='flex justify-center h-48 w-48'>
                            <img src='/images/consultoria-empresarial.jpeg' width={"300px"} height={"300px"} className='rounded-full hover:border-brown-50 hover:border-4' />
                        </div>
                        <div className='text-xl text-gray-700'>
                            Consultoria Empresarial
                        </div>
                    </div>
                    <div className='flex flex-col h-72 text-center items-center justify-around w-72 p-1 bg-white rounded-lg hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:border-brown-50 hover:border-4'>
                        <div className='flex justify-center h-48 w-48'>
                            <img src='/images/terapia-online.jpeg' width={"300px"} height={"300px"} className='rounded-full hover:border-brown-50 hover:border-4' />
                        </div>
                        <div className='text-xl text-gray-700'>
                            Terapia Online
                        </div>
                    </div>
                    <div className='flex flex-col h-72 text-center items-center justify-around w-72 p-1 bg-white rounded-lg hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:border-brown-50 hover:border-4'>
                        <div className='flex justify-center h-48 w-48'>
                            <img src='/images/aconselhamento-familiar.jpeg' width={"300px"} height={"300px"} className='rounded-full hover:border-brown-50 hover:border-4' />
                        </div>
                        <div className='text-xl text-gray-700'>
                            Aconselhamento Familiar
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-2 items-center mt-8 mb-8 max-[940px]:mt-10 max-[940px]:mb-10'>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
                            <img src='/icons/mensagem-de-telefone.png' alt='' width={"25px"} height={"25px"} className='rounded-full' />
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'} className='flex justify-center border-2 border-white w-40 rounded-full hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:bg-brown-50 hover:text-black text-gray-700'>
                            Agendamento
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3