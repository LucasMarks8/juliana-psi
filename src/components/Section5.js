import Link from 'next/link'
import React from 'react'

const Section5 = () => {
    return (
        <div id='section5' className='flex flex-col justify-start bg-gradient-to-r from-emerald-100  via-fuchsia-300 gap-y-8 h-fit max-[940px]:h-fit'>
            <div className='flex justify-center mt-10'>
                <div className='flex items-center w-[20rem] justify-center bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 rounded-full text-gray-700'>
                    ENTRE EM CONTATO
                </div>
            </div>
            <div className='flex justify-around mb-10 max-[940px]:flex-col gap-y-6'>
                <div className='flex justify-around max-xl:flex-col max-xl:items-center max-xl:gap-2'>
                    <div className='flex gap-y-2 flex-col'>
                        <div className='flex gap-x-2'>
                            <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
                                <img src='/icons/mensagem-de-telefone.png' alt='' width={"25px"} />
                            </Link>
                            <Link href={'https://wa.me/5511967422863'} target={'_blank'} className='flex text-center w-[10rem] hover:bg-gray-50 hover:bg-gradient-to-r from-emerald-100 via-fuchsia-300 hover:text-black rounded-full text-gray-700'>
                                <p> Agende seu horário</p>
                            </Link>
                        </div>
                        <div className='flex gap-x-2'>
                            <div>
                                <img src='/icons/telefone.png' alt='' width={'25px'} />
                            </div>
                            <div className='flex text-center w-[9rem] hover:bg-gray-50 hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:text-black rounded-full text-gray-700'>
                                <p>(11) 9.6742-2863</p>
                            </div>
                        </div>
                        <div className='flex gap-x-2'>
                            <div>
                                <Link href={'https://www.google.com.br/maps/place/R.+Banco+das+Palmas,+248+-+Santana,+S%C3%A3o+Paulo+-+SP,+02016-020/@-23.5009313,-46.6295105,3a,75y,337.91h,92.8t/data=!3m6!1e1!3m4!1siFwq3nM02pRPqJ_0_9IVtQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94cef62d063f3463:0xf1f2077c772ba6ef!8m2!3d-23.5007801!4d-46.6295273!10e5!16s%2Fg%2F11c3q4hyx4'} target={'_blank'}>
                                    <img src='/icons/local.png' alt='' width={"25px"} />
                                </Link>
                            </div>
                            <div>
                                <Link href={'https://www.google.com.br/maps/place/R.+Banco+das+Palmas,+248+-+Santana,+S%C3%A3o+Paulo+-+SP,+02016-020/@-23.5009313,-46.6295105,3a,75y,337.91h,92.8t/data=!3m6!1e1!3m4!1siFwq3nM02pRPqJ_0_9IVtQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94cef62d063f3463:0xf1f2077c772ba6ef!8m2!3d-23.5007801!4d-46.6295273!10e5!16s%2Fg%2F11c3q4hyx4'} target={'_blank'} className='flex text-center hover:bg-gradient-to-r from-emerald-100  via-fuchsia-300 hover:text-black rounded-full text-gray-700'>
                                    R Banco das Palmas, 248 - Santana - São Paulo/SP
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-x-10'>
                    <Link href={'https://www.instagram.com/psijucamanzano/'} target={'_blank'}><img src='/icons/insta.png' width={"60px"} height={"60px"} /></Link>
                    <Link href={'https://www.linkedin.com/in/juliana-camanzano-48a03713a/'} target={'_blank'}><img src='/icons/link.png' width={"60px"} height={"60px"} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Section5