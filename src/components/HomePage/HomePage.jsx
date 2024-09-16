import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
import Banner from '../Banner/Banner'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.headerSection}>
        <h1>Клініка пластичної хірургії</h1>
      </header>

      <div className={styles.bannerSection}>
        <Banner />
      </div>

      <div className={styles.buttonGroup}>
        {/* <Link to="/consultations" className={styles.homeButton}>
          Консультація
        </Link> */}

        {/* <Link to="/manipulations" className={styles.homeButton}>
          Маніпуляція
        </Link> */}

        {/* <Link to="/operations" className={styles.homeButton}>
          Операція
        </Link> */}
      </div>

      <Link to="/portfolio" className={styles.portfolioButton}>
        Перейти до портфоліо
      </Link>
    </div>
  )
}

export default HomePage
