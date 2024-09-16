import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
import Banner from '../Banner/Banner'
import BreastSurgerySection from '../BreastSurgerySection/BreastSurgerySection'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.headerSection}>
        <h1>Клініка пластичної хірургії</h1>
      </header>

      <div className={styles.bannerSection}>
        <Banner />
      </div>

      {/* <div className={styles.buttonGroup}></div> */}

      <Link to="/portfolio" className={styles.portfolioButton}>
        Перейти до портфоліо
      </Link>

      <BreastSurgerySection />
    </div>
  )
}

export default HomePage
