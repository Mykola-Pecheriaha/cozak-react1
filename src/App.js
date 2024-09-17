import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
// import Banner from './components/Banner/Banner';

import HomePage from './components/HomePage/HomePage'
import DoctorPortfolio from './components/DoctorPortfolio/DoctorPortfolio'
import OperationDetailsPage from './components/OperationDetails/OperationDetailsPage.jsx'
import ManipulationDetailsPage from './components/ManipulationDetailsPage/ManipulationDetailsPage'
import ConsultationDetailsPage from './components/ConsultationDetailsPage/ConsultationDetailsPage'
import OperationsMenu from './components/OperationsMenu/OperationsMenu'
import ManipulationsMenu from './components/ManipulationsMenu/ManipulationsMenu'
import ConsultationsMenu from './components/ConsultationsMenu/ConsultationsMenu'

// Нові компоненти
import BreastSurgerySection from './components/Sections/BreastSurgerySection/BreastSurgerySection.jsx'
import BodySurgerySection from './components/Sections/BodySurgerySection/BodySurgerySection.jsx'
import Abdominoplasty from './components/OperationDetails/Abdominoplasty.jsx'
import Liposuction from './components/OperationDetails/Liposuction.jsx'
import GlutealProsthetics from './components/OperationDetails/GlutealProsthetics.jsx'
import ScarCorrection from './components/OperationDetails/ScarCorrection.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Banner /> */}
      <Routes>
        {/* Головна сторінка */}
        <Route path="/" element={<HomePage />} />

        {/* Меню операцій */}
        <Route path="/operations" element={<OperationsMenu />} />
        <Route
          path="/operation/:operationTitle"
          element={<OperationDetailsPage />}
        />

        {/* Меню маніпуляцій */}
        <Route path="/manipulations" element={<ManipulationsMenu />} />
        <Route
          path="/manipulation/:manipulationTitle"
          element={<ManipulationDetailsPage />}
        />

        {/* Меню консультацій */}
        <Route path="/consultations" element={<ConsultationsMenu />} />
        <Route
          path="/consultation/:consultationTitle"
          element={<ConsultationDetailsPage />}
        />

        {/* Портфоліо лікаря */}
        <Route path="/portfolio" element={<DoctorPortfolio />} />

        {/* Нові розділи та операції */}
        <Route path="/breast-surgery" element={<BreastSurgerySection />} />
        <Route path="/body-surgery" element={<BodySurgerySection />} />

        {/* Операції на тілі */}
        <Route path="/operation/abdominoplasty" element={<Abdominoplasty />} />
        <Route path="/operation/liposuction" element={<Liposuction />} />
        <Route
          path="/operation/gluteal-prosthetics"
          element={<GlutealProsthetics />}
        />
        <Route path="/operation/scar-correction" element={<ScarCorrection />} />
      </Routes>
    </Router>
  )
}

export default App
