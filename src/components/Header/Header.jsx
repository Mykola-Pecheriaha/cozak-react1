import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/path-to-logo/logo.png" alt="Logo" />
      </div>
      <nav className={styles.nav}>
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
