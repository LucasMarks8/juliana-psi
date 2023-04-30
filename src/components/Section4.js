import React from 'react'

const Section4 = () => {
    return (
        <div id='section4' className='flex justify-center bg-white h-fit max-[940px]:flex-col items-center'>
            <div className='flex items-center mt-10'>
                <div>
                    <img src='/images/juliana1.jpeg' alt='' width={"300px"} className='mb-6' />
                </div>
            </div>
            <div className='flex w-1/2 justify-center gap-x-16 p-10'>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-y-6 w-full'>
                    <div className='flex items-center justify-center '>
                    <p className='flex items-center w-[20rem] justify-center bg-gradient-to-r from-emerald-100  via-fuchsia-300 to-pink-100 rounded-full text-gray-700'>
                        OLÁ, SEJA BEM-VINDO(A)
                    </p>
                </div>
                        <div className='text-gray-700'>
                            Meu nome é Juliana Camanzano, tenho 35 anos, sou Psicóloga Clínica na Abordagem Terapia Cognitivo Comportamental - TCC. (CRP – 06/118188) com experiência de pouco mais de 10 anos.
                            Meu trabalho hoje é feito de maneira online e presencial, dessa forma você pode escolher a opção que melhor lhe atender, as fronteiras físicas e geográficas não nos distanciam, só aproximam!
                            Faço atendimentos nas modalidades Individual, Infantil, Terapia de Casal e Supervisões Clínicas.
                            Trabalho também com Consultoria em empresas, visando sempre o bem-estar e saúde mental dos colaboradores a fim de que todos possam se desenvolver ao máximo profissionalmente, visando resultados positivos para as empresas.
                        </div>
                        <div className='text-gray-700'>
                            Faço também consultoria em escolas com o intuito de prevenir qualquer tipo de adversidades que possam surgir no ser humano durante seu desenvolvimento.
                            Cursei também MBA em Recursos Humanos com foco em seleção e desenvolvimento de pessoas, especialização em Seleção por Competência.
                            Com foco e comprometimento ético, busco de forma singular garantir que a saúde mental de meus pacientes esteja em equilíbrio, para que eles possam ter um desempenho total de suas capacidades.
                            Apaixonada por pessoas, busco através do meu trabalho desenvolvê-las para que elas possam se tornar a melhor versão de si mesmas.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4