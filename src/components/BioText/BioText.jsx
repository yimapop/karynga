import styled, { keyframes } from "styled-components"
import React from 'react'

const BioText = () => {
    return (
        <div>
            <section className="section-container">
                <article className="article-container">
                    <Title>BIOGRAFÍA</Title>
                </article>
                <article className="text-container">
                    <Text className="text-bio">
                        Gerardo Collazo Vilar (20 de marzo de 1988, Baiona), con nombre artístico karynga, es pintor e
                        ilustrador autodidacta, escritor, periodista por la Universidad Complutense de Madrid, técnico
                        superior en realización de espectáculos y audiovisuales y especialista en marketing digital y
                        publicidad. Desde su primera exposición en 2016, ha mostrado sus obras en distintos puntos de la
                        península, participando tanto en exposiciones colectivas como individuales.<br></br><br></br>
                        Como escritor, publicó su primera novela, <em><strong>El Amanecer de los justos</strong></em>, en
                        2014.<br></br>
                        En 2015 publicó su segunda novela, bajo el título <em><strong>Autopista Roswell</strong></em>.<br></br>
                        En 2019 publicó su tercera novela, titulada <em><strong>Me he dejado los conejos atrás, ¡y no me importa!</strong></em><br></br>
                        En 2022 publicó su cuarta novela, titulada <em><strong>Agarimo.</strong></em><br></br>
                        Actualmente reside en Barcelona.

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

export default BioText

