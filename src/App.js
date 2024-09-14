import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import OperationsMenu from './components/Menus/OperationsMenu'
import ManipulationsMenu from './components/Menus/ManipulationsMenu'
import ConsultationsMenu from './components/Menus/ConsultationsMenu'
import OperationDetailsPage from './components/OperationDetailsPage/OperationDetailsPage'
import ManipulationDetailsPage from './components/ManipulationDetailsPage/ManipulationDetailsPage'
import ConsultationDetailsPage from './components/ConsultationDetailsPage/ConsultationDetailsPage'
import DoctorPortfolio from './components/DoctorPortfolio/DoctorPortfolio'

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        {/* Операції */}
        <Route path="/operations" element={<OperationsMenu />} />
        <Route
          path="/operation/:operationTitle"
          element={<OperationDetailsPage />}
        />

        {/* Маніпуляції */}
        <Route path="/manipulations" element={<ManipulationsMenu />} />
        <Route
          path="/manipulation/:manipulationTitle"
          element={<ManipulationDetailsPage />}
        />

        {/* Консультації */}
        <Route path="/consultations" element={<ConsultationsMenu />} />
        <Route
          path="/consultation/:consultationTitle"
          element={<ConsultationDetailsPage />}
        />

        {/* Портфоліо */}
        <Route path="/portfolio" element={<DoctorPortfolio />} />
      </Routes>
    </Router>
  )
}

export default App
