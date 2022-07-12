import React, { useState } from "react";
import data from "../../data/imagesAglomeraciones.json"
import Modal from "../Modal/Modal";
import styled, { keyframes } from "styled-components"

const AglomeracionesPic = () => {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedText, setClickedText] = useState(null)

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
        setClickedText(item.text)
    };
    const handelRotationRight = () => {
        const totalLength = data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].link;
            setClickedImg(newUrl);
            const newText = data.data[0].text;
            setClickedText(newText)
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newText = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        const newOverlayText = newText[0].text;
        setClickedImg(newItem);
        setClickedText(newOverlayText);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.data[totalLength - 1].link;
            setClickedImg(newUrl);
            const newText = data.data[totalLength - 1].text;
            setClickedText(newText);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newText = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        const newOverlayText = newText[0].text;
        setClickedImg(newItem);
        setClickedText(newOverlayText);
        setCurrentIndex(newIndex);
    };

    return (
        <section className="section-container">
            <article className="article-container">
                <Title>AGLOMERACIONES</Title>
            </article>
            <article>
                <div className="wrapper">
                    {data.data.map((item, index) => (
                        <div key={index} className="wrapper-images">
                            <Pic
                                src={item.link}
                                alt={item.text}
                                onClick={() => handleClick(item, index)}
                            />
                            <h2>{item.text}</h2>
                        </div>
                    ))}
                    <div>
                        {clickedImg && clickedText && (
                            <Modal
                                clickedImg={clickedImg}
                                handelRotationRight={handelRotationRight}
                                setClickedImg={setClickedImg}
                                handelRotationLeft={handelRotationLeft}
                                clickedText={clickedText}
                            />
                        )}
                    </div>
                </div>
            </article>
        </section>
    );
}

export default AglomeracionesPic

const picFade = keyframes`
0%{
    opacity:0;
}

100% {
    opacity: 1
}
`;

const textfade = keyframes`
0%{
    opacity:0;
}

100% {
    opacity: 1
}
`;

const Pic = styled.img`
animation: ${picFade} 4.5s forwards ease;
`;

const Title = styled.h2`
animation: ${textfade} 2s forwards ease;
`