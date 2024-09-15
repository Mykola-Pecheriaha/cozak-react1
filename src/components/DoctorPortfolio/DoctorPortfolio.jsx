import React from 'react'
import styles from './DoctorPortfolio.module.css'

const DoctorPortfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1>Портфоліо лікаря</h1>
      <p>Тут ви можете ознайомитися з роботами лікаря...</p>
      <img src="/path-to-doctor-image/doctor.jpg" alt="Doctor" />
    </div>
  )
}

export default DoctorPortfolio
