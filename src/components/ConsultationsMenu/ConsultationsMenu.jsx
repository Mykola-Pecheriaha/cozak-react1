import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ConsultationsMenu.module.css'
import consultationsData from '../../data/consultationsData'

const ConsultationsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.menu}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
      >
        Консультація
      </button>
      {isMenuOpen && (
        <ul className={styles.menuList}>
          {consultationsData.consultations.map((consultation) => (
            <li key={consultation.title}>
              <Link
                to={`/consultation/${encodeURIComponent(consultation.title)}`}
                className={styles.menuLink}
              >
                {consultation.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ConsultationsMenu
