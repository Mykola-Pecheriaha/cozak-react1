import React from 'react'
import { Link, useParams } from 'react-router-dom'
import operationsData from '../../data/operationsData'
import styles from './OperationDetailsPage.module.css'

const OperationDetailsPage = () => {
  const { operationTitle } = useParams()
  const decodedTitle = decodeURIComponent(operationTitle)
  const operation = operationsData.operations.find(
    (op) => op.title === decodedTitle
  )

  if (!operation) {
    return (
      <div>
        <h2>Операцію не знайдено.</h2>
        <Link to="/" className={styles.backLink}>
          Повернутися на головну
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{operation.title}</h1>
      <p className={styles.description}>{operation.description}</p>
      {operation.image && (
        <img
          src={operation.image}
          alt={operation.title}
          className={styles.image}
        />
      )}
      <Link to="/" className={styles.backLink}>
        Повернутися на головну
      </Link>
    </div>
  )
}

export default OperationDetailsPage
