import './Navigation.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import styled, { keyframes } from "styled-components"

const Navigation = () => {

    const [isMobile, setIsMobile] = useState(false)

    const [subMenu, setSubMenu] = useState(false)
    const showSubMenu = () => setSubMenu(!subMenu)

    // const [active, setActive] = useState(true)

    return (
        <>
            <header className="navbar-box">
                <Link to="/" className="logo-karynga">
                    <h1>KARYNGA</h1>
                </Link>
                <nav className="navbar" >
                    <ul className={isMobile ? "nav-mobile-links" : "nav-links"} onClick={() => setIsMobile(false)}>
                        <Link to="/obra" className="obra"><li>OBRA</li></Link>
                        <Link to="/pinturas/humanidad" className="pinturas" onClick={showSubMenu}><li>PINTURAS</li></Link>
                        <ul className={subMenu ? 'sub-menu active' : 'sub-menu'}>
                            <Link to="/pinturas/humanidad" className="humanidad"><li>HUMANIDAD </li></Link>
                            <Link to="/pinturas/criaturas-del-confort" className="criaturas"><li>CRIATURAS DEL CONFORT</li></Link>
                            <Link to="/pinturas/aglomeraciones" className="aglomeraciones"><li>AGLOMERACIONES</li></Link>
                            <Link to="/pinturas/saturacion-publicitaria" className="saturacion"><li>SATURACIÓN PUBLICITARIA</li></Link>
                            <Link to="/pinturas/ensenanza-de-la-drogadiccion" className="drogadiccion"><li>ENSEÑANZA DE LA DROGADICCIÓN</li></Link>
                            <Link to="/pinturas/medula-ansiosa" className="medula"><li>MÉDULA ANSIOSA</li></Link>
                            <Link to="/pinturas/sistema-nervioso" className="sistema"><li>SISTEMA NERVIOSO</li></Link>
                        </ul>
                        <Link to="/exposiciones" className="expo"><li>EXPOSICIONES</li></Link>
                        <Link to="/biografia" className="bio"><li>BIOGRAFÍA</li></Link>
                        <Link to="/contacto" className="contacto"><li>CONTACTO</li></Link>
                    </ul>
                </nav>
                <Link to="#" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <IoIcons.IoIosClose className="mobile-close-icon" /> : <FaIcons.FaBars className="mobile-menu-icon" />}
                </Link>
            </header>
        </>
    )
}

export default Navigation
