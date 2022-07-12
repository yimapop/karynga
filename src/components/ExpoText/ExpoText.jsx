import styled, { keyframes } from "styled-components"
import React from 'react'

const ExpoText = () => {
    return (
        <div>
            <section className="section-container">
                <article className="article-container">
                    <Title>EXPOSICIONES</Title>
                </article>
                <article className="text-container">
                    <Text className="text-bio">
                        <li> Sep 2006 - Casa del libro, Vigo </li><br></br>
                        <li> Sep 2007 - Casa del libro, Vigo </li><br></br>
                        <li> Julio 2012 - Espacio Vías, León </li><br></br>
                        <li> Julio 2014 - Capitanía marítima, Baiona </li><br></br>
                        <li> Agosto 2016 - Capitanía marítima, Baiona </li><br></br>
                        <li> Marzo 2021 - Studio 66, Barcelona </li><br></br>
                        <li> Abril 2021 - Bridge 48, Barcelona </li><br></br>
                        <li> Agosto 2021 - Leopardo Leopardi, Barcelona </li><br></br>
                        <li> Agosto 2021 - Buena Onda, Barcelona </li><br></br>
                        <li> Septiembre 2021 - Bridge 48, Barcelona </li><br></br>
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

export default ExpoText

