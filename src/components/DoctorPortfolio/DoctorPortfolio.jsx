import React from 'react'
import styles from './DoctorPortfolio.module.css'
import { Link } from 'react-router-dom'

const DoctorPortfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1>Портфоліо лікаря</h1>
      <p>Тут ви можете ознайомитися з роботами лікаря...</p>
      <img src="/path-to-doctor-image/doctor.jpg" alt="Doctor" />

      <Link to="/" className={styles.backButton}>
        Повернутися на головну
      </Link>
    </div>
  )
}

export default DoctorPortfolio
