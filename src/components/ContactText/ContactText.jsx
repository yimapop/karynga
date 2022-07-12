import styled, { keyframes } from "styled-components"
import React from 'react'
import { Link } from 'react-router-dom'

const ContactText = () => {
    return (
        <div>
            <section className="section-container">
                <article className="article-container">
                    <Title>CONTACTO</Title>
                </article>
                <article className="text-container">
                    <Text id="text-contact">
                        <Link to="mailto:karynga@gmail.com" target="_blank">
                            <li>
                                <p>karynga.art@gmail.com</p>
                            </li>
                        </Link><br></br>
                        <Link to="https://instagram.com/karynga_art" target="_blank">
                            <li>
                                <p>Instagram</p>
                            </li>
                        </Link><br></br>
                        {/* <Link to="https://gerardocollazovilarbarcelona.wordpress.com/" target="_blank">
                            <li>
                                <p>Wordpress</p>
                            </li>
                        </Link><br></br> */}
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

export default ContactText

