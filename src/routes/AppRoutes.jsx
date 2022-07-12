import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from '../pages/HomePage/HomePage'
import ObraPage from "../pages/ObraPage/ObraPage"
import ExpoPage from "../pages/ExpoPage/ExpoPage"
import BioPage from "../pages/BioPage/BioPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import HumanidadPage from "../pages/HumanidadPage/HumanidadPage"
import CriaturasPage from "../pages/CriaturasPage/CriaturasPage"
import AglomeracionesPage from "../pages/AglomeracionesPage/AglomeracionesPage"
import SaturacionPage from "../pages/SaturacionPage/SaturacionPage"
import EnsenanzaPage from "../pages/EnsenanzaPage/EnsenanzaPage"
import MedulaPage from "../pages/MedulaPage/MedulaPage"
import SistemaPage from "../pages/SistemaPage/SistemaPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/obra" element={<ObraPage />} />
            <Route path="/pinturas/humanidad" element={<HumanidadPage />} />
            <Route path="/pinturas/criaturas-del-confort" element={<CriaturasPage />} />
            <Route path="/pinturas/aglomeraciones" element={<AglomeracionesPage />} />
            <Route path="/pinturas/saturacion-publicitaria" element={<SaturacionPage />} />
            <Route path="/pinturas/ensenanza-de-la-drogadiccion" element={<EnsenanzaPage />} />
            <Route path="/pinturas/medula-ansiosa" element={<MedulaPage />} />
            <Route path="/pinturas/sistema-nervioso" element={<SistemaPage />} />
            <Route path="/exposiciones" element={<ExpoPage />} />
            <Route path="/biografia" element={<BioPage />} />
            <Route path="/contacto" element={<ContactPage />} />
        </Routes>
    )
}

export default AppRoutes