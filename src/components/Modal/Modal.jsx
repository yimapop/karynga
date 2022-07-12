import React from "react";

const Modal = ({
    clickedImg,
    clickedText,
    setClickedImg,
    setClickedText,
    handelRotationRight,
    handelRotationLeft
}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
            // setClickedText(null);
        }
    };

    return (
        <>
            <div className="overlay dismiss" onClick={handleClick}>
                <img src={clickedImg} alt={clickedText} />
                <span class="material-symbols-outlined dismiss">
                    close
                </span>
                <div onClick={handelRotationLeft} className="overlay-arrows_left">
                    <div>
                        <span class="material-symbols-outlined">
                            navigate_before
                        </span>
                    </div>
                </div>
                <div onClick={handelRotationRight} className="overlay-arrows_right">
                    <div>
                        <span class="material-symbols-outlined">
                            navigate_next
                        </span>
                    </div>
                </div>
                <div className="overlay-text">
                    <h2>{clickedText}</h2>
                </div>
            </div>
        </>
    );
};

export default Modal;