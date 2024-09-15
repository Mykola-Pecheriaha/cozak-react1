import React from 'react'
import { useParams, Link } from 'react-router-dom'
import manipulationsData from '../../data/manipulationsData'
import styles from './ManipulationDetailsPage.module.css'

const ManipulationDetailsPage = () => {
  const { manipulationTitle } = useParams()
  const decodedTitle = decodeURIComponent(manipulationTitle)
  const manipulation = manipulationsData.manipulations.find(
    (manipulation) => manipulation.title === decodedTitle
  )

  if (!manipulation) {
    return (
      <div>
        <h2>Маніпуляцію не знайдено.</h2>
        <Link to="/" className={styles.backLink}>
          Повернутися на головну
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{manipulation.title}</h1>
      <p className={styles.description}>{manipulation.description}</p>
      {manipulation.image && (
        <img
          src={manipulation.image}
          alt={manipulation.title}
          className={styles.image}
        />
      )}
      <br />
      <Link to="/" className={styles.backLink}>
        Повернутися на головну
      </Link>
    </div>
  )
}

export default ManipulationDetailsPage
