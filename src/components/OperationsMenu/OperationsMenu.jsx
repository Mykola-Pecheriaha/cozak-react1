import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './OperationsMenu.module.css'
import operationsData from '../../data/operationsData'

const OperationsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.menu}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
      >
        Операції
      </button>
      {isMenuOpen && (
        <ul className={styles.menuList}>
          {operationsData.operations.map((operation) => (
            <li key={operation.title}>
              <Link
                to={`/operation/${encodeURIComponent(operation.title)}`}
                className={styles.menuLink}
              >
                {operation.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default OperationsMenu
