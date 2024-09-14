import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ManipulationsMenu.module.css'
import manipulationsData from '../../data/manipulationsData'

const ManipulationsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.menu}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
      >
        Маніпуляції
      </button>
      {isMenuOpen && (
        <ul className={styles.menuList}>
          {manipulationsData.manipulations.map((manipulation) => (
            <li key={manipulation.title}>
              <Link
                to={`/manipulation/${encodeURIComponent(manipulation.title)}`}
                className={styles.menuLink}
              >
                {manipulation.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ManipulationsMenu
