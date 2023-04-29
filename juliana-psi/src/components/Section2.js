import React from 'react'

const Section2 = () => {
    return (
        <div id='section2' className='flex flex-col'>
            <div className='flex justify-center mt-10 max-[940px]:mb-10'>
                <div className='flex items-center w-[20rem] justify-center bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 rounded-full text-gray-700'>
                    POR QUE FAZER TERAPIA?
                </div>
            </div>
            <div className='flex items-center justify-center mb-6 h-52 gap-2 max-xl:grid max-xl:grid-rows-2 max-xl:grid-cols-4 max-xl:h-full max-xl:w-full justify-items-center max-[940px]:grid-cols-2'>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Promove autoconhecimento
                    </div>
                </div>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Melhora na autoestima
                    </div>
                </div>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Relações mais saudáveis
                    </div>
                </div>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Identificar habilidades
                    </div>
                </div>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Desenvolvimento profissional
                    </div>
                </div>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Melhora das emoções
                    </div>
                </div>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Resolução de conflitos
                    </div>
                </div>
                <div className='flex flex-col border bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 h-36 text-center justify-around w-36 p-1 rounded-lg hover:border-brown-50 hover:border-4'>
                    <div className='flex justify-center'>
                        <img src='/icons/coracao.png' width={"25px"} height={"25px"} />
                    </div>
                    <div className='text-gray-700'>
                        Auxílio na aceitação do luto
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2