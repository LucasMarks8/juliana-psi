import Link from 'next/link'
import React from 'react'

const Section3 = () => {
    return (
        <div id='Section3' className='flex flex-col h-[33rem] bg-brown-50'>
            <div className='flex items-center justify-center h-10 p-10 text-xl'>
                Áreas de Atuação
            </div>
            <div className='flex flex-col items-center justify-center h-52 gap-2'>
                <div className='flex items-center justify-center h-52 gap-2'>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                </div>
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
            </div>
            <div className='flex flex-col items-center justify-center h-52 gap-2'>
                <div className='flex items-center justify-center h-52 gap-2'>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                    <div className='flex flex-col border h-36 text-center justify-around w-36 p-1 bg-ivory-50 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src='/icons/apoio-suporte.png' width={"25px"} height={"25px"} />
                        </div>
                        <div>
                            Promove autoconhecimento
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Section3