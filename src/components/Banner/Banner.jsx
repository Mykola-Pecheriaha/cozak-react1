import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img
        src="/path-to-doctor-photo.jpg"
        alt="Doctor"
        className={styles.bannerImage}
      />
      <br />
      <Link to="/portfolio" className={styles.bannerButton}>
        Перейти до портфоліо
      </Link>
    </div>
  )
}

export default Banner
