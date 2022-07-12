import styled, { keyframes } from "styled-components"
import React from 'react'

const ObraText = () => {
    return (
        <div>
            <section className="section-container">
                <article className="article-container">
                    <Title>OBRA</Title>
                </article>
                <article className="text-container">
                    <Text className="text-bio">
                        La obra de karynga desarrolla una narración ininterrumpida de momentos e instantes extraídos de la
                        cotidianidad del individuo secular, el ahora del mundo en que vivimos y los frenéticos pasos previos
                        (la revolución tecnológica, internet, las redes sociales, etc) a un futuro incierto que tiende a
                        suceder deprisa. Cada personaje o grupo de ellos, enjaulados dentro de los límites del bastidor,
                        representa un pequeño fragmento de lo que somos: el estrés, la aglomeración, la retracción
                        emocional, el bullicio de la gran ciudad, las continuas exigencias del medio, el inconformismo
                        destructivo, el capitalismo irresponsable, la necesidad de atención. Todo ello nos transforma en
                        criaturas insaciables a merced de la cultura del sprint; un voraz ejército de yonquis adictos al
                        confort, la autoperfección, el ocio y otros muchos placebos de la vida moderna que karynga trata en
                        su obra por medio de una contraposición entre el color, las formas y la temática. Por medio de un
                        sinfín de coloridos monstruos y personajes, karynga estructura una narrativa con la cual definir a
                        la sociedad actual, que parte con la obra Esnifando en París con el Sistema Nervioso (2008) y se
                        desarrolla hasta nuestros días siguiendo un mismo patrón donde estilos pictóricos como el
                        figurativismo, la abstracción gestual o la figuración post-pop confluyen con el expresionismo
                        abstracto con total naturalidad.
                    </Text>
                </article>
            </section>
        </div>
    )
}

const titleFade = keyframes`
0% {
    opacity: 0;
    transform: translateY(-10px);
}

80%{
    opacity: 0.5;
    transform: translateY(-10px);
}

100%{
    opacity:1;
    transform:translateY(0px);
}
`

const textfade = keyframes`
0%{
    opacity:0;
}

100% {
    opacity: 1
}
`;

const Title = styled.h2`
animation: ${textfade} 2s forwards ease;
`

const Text = styled.p`
animation: ${textfade} 1s forwards ease;
`;

export default ObraText

