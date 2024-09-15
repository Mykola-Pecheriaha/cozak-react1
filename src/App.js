import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
// import Banner from './components/Banner/Banner'

import OperationsMenu from './components/OperationsMenu/OperationsMenu.jsx'

import ManipulationsMenu from './components/ManipulationsMenu/ManipulationsMenu.jsx'

import ConsultationsMenu from './components/ConsultationsMenu/ConsultationsMenu.jsx'
import DoctorPortfolio from './components/DoctorPortfolio/DoctorPortfolio'
import OperationDetailsPage from './components/OperationDetailsPage/OperationDetailsPage.jsx'
import ManipulationDetailsPage from './components/ManipulationDetailsPage/ManipulationDetailsPage.jsx'
import ConsultationDetailsPage from './components/ConsultationDetailsPage/ConsultationDetailsPage.jsx'
import HomePage from './components/HomePage/HomePage'

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Banner />  */}
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        {/* Головна сторінка з банером */}
        <Route path="/operations" element={<OperationsMenu />} />
        <Route
          path="/operation/:operationTitle"
          element={<OperationDetailsPage />}
        />
        <Route path="/manipulations" element={<ManipulationsMenu />} />
        <Route
          path="/manipulation/:manipulationTitle"
          element={<ManipulationDetailsPage />}
        />
        <Route path="/consultations" element={<ConsultationsMenu />} />
        <Route
          path="/consultation/:consultationTitle"
          element={<ConsultationDetailsPage />}
        />
        <Route path="/portfolio" element={<DoctorPortfolio />} />
      </Routes>
    </Router>
  )
}

export default App
