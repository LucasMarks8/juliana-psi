import Link from 'next/link'
import React from 'react'

const Section3 = () => {
    return (
        <div id='Section3' className='flex flex-col mt-14 gap-y-2 h:fit bg-white max-[940px]:h-fit'>
            <div className='flex justify-center mb-8'>
                <div className='flex items-center w-[20rem] justify-center bg-gray-50 rounded-full font-mono'>
                    ÁREAS DE ATUAÇÃO
                </div>
            </div>
            <div className='flex flex-col items-center justify-center h-fit gap-2 max-[940px]:h-fit'>
                <div className='flex items-center justify-center h-fit gap-2 max-[940px]:grid max-[940px]:grid-cols-1 max-[940px]:h-fit max-[940px]:mt-4'>
                    <div className='flex flex-col text-center items-center justify-around h-96 w-72 p-1 bg-white rounded-lg'>
                        <div className='flex justify-center h-48 w-48 max-[940px]:h-40 max-[940px]:w-40 rounded-full'>
                            <img src='/images/terapia-individual.jpeg' width={"300px"} height={"300px"} className='rounded-full' />
                        </div>
                        <div className='text-xl font-mono'>
                            Terapia Individual
                        </div>
                        <div className='text-gray-700 font-serf'>
                            Aaaaaaaaaaa aaaaaaaaaaaaa aaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaa a aaa aaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center justify-around h-96 w-72 p-1 bg-white rounded-lg'>
                        <div className='flex justify-center h-48 w-48 max-[940px]:h-40 max-[940px]:w-40 rounded-full'>
                            <img src='/images/terapia-de-casal.jpeg' width={"300px"} height={"300px"} className='rounded-full' />
                        </div>
                        <div className='text-xl font-mono'>
                            Terapia de Casal
                        </div>
                        <div className='text-gray-700 font-serif'>
                            Aaaaaaaaaaa aaaaaaaaaaaaa aaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaa a aaa aaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center justify-around h-96 w-72 p-1 bg-white rounded-lg'>
                        <div className='flex justify-center h-48 w-48 max-[940px]:h-40 max-[940px]:w-40 rounded-full'>
                            <img src='/images/terapia-infantil.jpeg' width={"300px"} height={"300px"} className='rounded-full' />
                        </div>
                        <div className='text-xl font-mono'>
                            Terapia Infantil
                        </div>
                        <div className='text-gray-700 font-serif'>
                            Aaaaaaaaaaa aaaaaaaaaaaaa aaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaa a aaa aaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col items-center justify-center h-fit gap-2 max-[940px]:h-fit'>
                <div className='flex items-center justify-center h-fit gap-2 max-[940px]:grid max-[940px]:grid-cols-1 max-[940px]:h-fit'>
                    <div className='flex flex-col text-center items-center justify-around h-96 w-72 p-1 bg-white rounded-lg'>
                        <div className='flex justify-center h-48 w-48 max-[940px]:h-40 max-[940px]:w-40 rounded-full'>
                            <img src='/images/consultoria-empresarial.jpeg' width={"300px"} height={"300px"} className='rounded-full' />
                        </div>
                        <div className='text-xl font-mono'>
                            Consultoria Empresarial
                        </div>
                        <div className='text-gray-700 font-serif'>
                            Aaaaaaaaaaa aaaaaaaaaaaaa aaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaa a aaa aaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center justify-around h-96 w-72 p-1 bg-white rounded-lg'>
                        <div className='flex justify-center h-48 w-48 max-[940px]:h-40 max-[940px]:w-40 rounded-full'>
                            <img src='/images/terapia-online.jpeg' width={"300px"} height={"300px"} className='rounded-full' />
                        </div>
                        <div className='text-xl font-mono'>
                            Terapia Online
                        </div>
                        <div className='text-gray-700 font-serif'>
                            Aaaaaaaaaaa aaaaaaaaaaaaa aaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaa a aaa aaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center justify-around h-96 w-72 p-1 bg-white rounded-lg'>
                        <div className='flex justify-center h-48 w-48 max-[940px]:h-40 max-[940px]:w-40 rounded-full'>
                            <img src='/images/aconselhamento-familiar.jpeg' width={"300px"} height={"300px"} className='rounded-full' />
                        </div>
                        <div className='text-xl font-mono'>
                            Aconselhamento Familiar
                        </div>
                        <div className='text-gray-700 font-serif'>
                            Aaaaaaaaaaa aaaaaaaaaaaaa aaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaa a aaa aaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3