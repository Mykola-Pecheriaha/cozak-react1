import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img
        src="/path-to-doctor/doctor.jpg"
        alt="Doctor"
        className={styles.doctorImage}
      />
      <h2>Dr. Ім'я Лікаря</h2>
      <Link to="/portfolio">
        <button className={styles.portfolioButton}>
          Переглянути портфоліо
        </button>
      </Link>
    </div>
  )
}

export default Banner
