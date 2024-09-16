import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/images/logo2.jpg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <p>PlastikP</p>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          Головна
        </Link>

        <Link to="/consultations" className={styles.navLink}>
          Консультація
        </Link>
        <Link to="/manipulations" className={styles.navLink}>
          Маніпуляція
        </Link>
        <Link to="/operations" className={styles.navLink}>
          Операція
        </Link>
      </nav>
    </header>
  )
}

export default Header
