import Link from 'next/link'
import React, { useState } from 'react'

const Section5 = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div id='section5' className='flex flex-col gap-y-8 h-fit max-[940px]:h-fit'>
            <div className='flex justify-center mt-10'>
                <div className='flex items-center mb-6 w-[20rem] justify-center bg-gray-50 rounded-full max-xl:mb-0'>
                    ENTRE EM CONTATO
                </div>
            </div>
            <div className='flex justify-around mb-10 max-xl:flex-col max-xl:items-center max-[940px]:flex-col gap-y-6'>
                <div className='max-xl:mt-6 max-[940px]:mt-10'>
                    <img src='/images/logoHorizontal.jpeg' alt='' width={'400px'} className='mt-6 mb-6' />
                </div>
                <div className='w-[24rem]'>
                    <form className='flex flex-col justify-center items-align gap-3' onSubmit={() => { }}>
                        <input className='input border  bg-gray-50 placeholder:text-black hover:placeholder:text-white hover:bg-gray-600 hover:text-white' type='text' placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name} />
                        <input className='input border  bg-gray-50 placeholder:text-black hover:placeholder:text-white hover:bg-gray-600 hover:text-white' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <input className='input border  bg-gray-50 placeholder:text-black hover:placeholder:text-white hover:bg-gray-600 hover:text-white' type='text' placeholder='Whatsapp' onChange={(e) => setWhatsapp(e.target.value)} value={whatsapp} />
                        <textarea className='textarea h-[8rem] bg-gray-50 placeholder:text-black hover:placeholder:text-white hover:bg-gray-600 hover:text-white' placeholder='Mensagem' onChange={(e) => setMessage(e.target.value)} value={message} />
                        <button className='button bg-gray-50 hover:placeholder:text-white hover:bg-gray-700 hover:text-white' type='submit' value={'Enviar'}>Enviar</button>
                    </form>
                </div>
                <div className='flex flex-col justify-around max-xl:flex-col max-xl:mt-6 max-xl:items-center max-xl:gap-2'>
                    <div className='flex gap-y-6 flex-col'>
                        <div className='flex gap-x-2'>
                            <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
                                <img src='/icons/whatsapp.png' alt='' width={"25px"} />
                            </Link>
                            <Link href={'https://wa.me/5511967422863'} target={'_blank'} className='flex text-center w-[10rem] hover:bg-white via-fuchsia-300 hover:text-black rounded-full'>
                                <p> Agende seu horário</p>
                            </Link>
                        </div>
                        <div className='flex gap-x-2'>
                            <div>
                                <img src='/icons/contato-telefonico.png' alt='' width={'25px'} />
                            </div>
                            <div className='flex text-center w-[9rem] hover:bg-white  via-fuchsia-300 hover:text-black rounded-full'>
                                <p>(11) 9.6742-2863</p>
                            </div>
                        </div>
                        <div className='flex gap-x-2'>
                            <div>
                                <Link href={'https://www.google.com.br/maps/place/R.+Banco+das+Palmas,+248+-+Santana,+S%C3%A3o+Paulo+-+SP,+02016-020/@-23.5009313,-46.6295105,3a,75y,337.91h,92.8t/data=!3m6!1e1!3m4!1siFwq3nM02pRPqJ_0_9IVtQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94cef62d063f3463:0xf1f2077c772ba6ef!8m2!3d-23.5007801!4d-46.6295273!10e5!16s%2Fg%2F11c3q4hyx4'} target={'_blank'}>
                                    <img src='/icons/mapas-e-bandeiras.png' alt='' width={"25px"} />
                                </Link>
                            </div>
                            <div>
                                <Link href={'https://www.google.com.br/maps/place/R.+Banco+das+Palmas,+248+-+Santana,+S%C3%A3o+Paulo+-+SP,+02016-020/@-23.5009313,-46.6295105,3a,75y,337.91h,92.8t/data=!3m6!1e1!3m4!1siFwq3nM02pRPqJ_0_9IVtQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94cef62d063f3463:0xf1f2077c772ba6ef!8m2!3d-23.5007801!4d-46.6295273!10e5!16s%2Fg%2F11c3q4hyx4'} target={'_blank'} className='flex text-center hover:bg-white hover:text-black rounded-full'>
                                    R Banco das Palmas, 248 - Santana - São Paulo/SP
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-x-10 max-xl:mt-6'>
                        <Link href={'https://www.instagram.com/psijucamanzano/'} target={'_blank'}><img src='/icons/instagram.png' width={"60px"} height={"60px"} /></Link>
                        <Link href={'https://www.linkedin.com/in/juliana-camanzano-48a03713a/'} target={'_blank'}><img src='/icons/linkedin.png' width={"60px"} height={"60px"} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5