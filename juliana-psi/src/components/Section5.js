import Link from 'next/link'
import React from 'react'

const Section5 = () => {
    return (
        <div id='section5' className='flex flex-col bg-brown-50 gap-y-8 h-60'>
            <div className='flex justify-center h-10 p-10 text-xl'>
                Entre em contato
            </div>
            <div className='flex justify-around'>
                <div className='flex gap-x-2'>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'}>
                            <img src='/icons/whatsapp.png' alt='' width={"25px"} height={"25px"} />
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://wa.me/5511967422863'} target={'_blank'} className='flex justify-center border-4 border-ivory-50 w-52 rounded-full'>
                            <p> Agende seu horário</p>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-x-2'>
                    <div>
                        <Link href={'https://www.google.com.br/maps/place/R.+Banco+das+Palmas,+248+-+Santana,+S%C3%A3o+Paulo+-+SP,+02016-020/@-23.5009313,-46.6295105,3a,75y,337.91h,92.8t/data=!3m6!1e1!3m4!1siFwq3nM02pRPqJ_0_9IVtQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94cef62d063f3463:0xf1f2077c772ba6ef!8m2!3d-23.5007801!4d-46.6295273!10e5!16s%2Fg%2F11c3q4hyx4'} target={'_blank'}>
                            <img src='/icons/mapas-e-bandeiras.png' alt='' width={"25px"} height={"25px"} />
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://www.google.com.br/maps/place/R.+Banco+das+Palmas,+248+-+Santana,+S%C3%A3o+Paulo+-+SP,+02016-020/@-23.5009313,-46.6295105,3a,75y,337.91h,92.8t/data=!3m6!1e1!3m4!1siFwq3nM02pRPqJ_0_9IVtQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94cef62d063f3463:0xf1f2077c772ba6ef!8m2!3d-23.5007801!4d-46.6295273!10e5!16s%2Fg%2F11c3q4hyx4'} target={'_blank'} className='flex justify-center border-4 border-ivory-50 w-[26rem] rounded-full'>
                            Rua Banco das Palmas, 248, Santana - São Paulo - SP
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-x-10'>
                <Link href={'https://www.instagram.com/psijucamanzano/'} target={'_blank'}><img src='/icons/instagram.png' width={"30px"} height={"30px"} /></Link>
                <Link href={'https://www.linkedin.com/in/juliana-camanzano-48a03713a/'} target={'_blank'}><img src='/icons/linkedin.png' width={"30px"} height={"30px"} /></Link>
            </div>
        </div>
    )
}

export default Section5