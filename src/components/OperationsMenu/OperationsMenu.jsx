import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './OperationsMenu.module.css'
import operationsData from '../../data/operationsData'

const OperationsMenu = () => {
  const [selectedOperation, setSelectedOperation] = useState(null) // Додаємо стан для вибраної операції

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Операції</h1>
      <ul className={styles.menuList}>
        {operationsData.operations.map((operation) => (
          <li key={operation.title} className={styles.menuItem}>
            <button
              onClick={() => setSelectedOperation(operation)}
              className={styles.menuLink}
            >
              {operation.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedOperation && (
        <div className={styles.operationDetails}>
          <h3 className={styles.operationTitle}>{selectedOperation.title}</h3>
          <p className={styles.shortDescription}>
            {selectedOperation.shortDescription}
          </p>
          <div className={styles.imageContainer}>
            <img
              src={selectedOperation.image}
              alt={selectedOperation.title}
              className={styles.operationImage}
            />
          </div>
          <Link
            to={`/operation/${encodeURIComponent(selectedOperation.title)}`}
            className={styles.detailsLink}
          >
            Детальніше
          </Link>
        </div>
      )}
    </div>
  )
}

export default OperationsMenu
