import React from 'react'
import { useParams, Link } from 'react-router-dom'
import consultationsData from '../../data/consultationsData'
import styles from './ConsultationDetailsPage.module.css'

const ConsultationDetailsPage = () => {
  const { consultationTitle } = useParams()
  const decodedTitle = decodeURIComponent(consultationTitle)
  const consultation = consultationsData.consultations.find(
    (consultation) => consultation.title === decodedTitle
  )

  if (!consultation) {
    return (
      <div className={styles.container}>
        <h2>Консультацію не знайдено.</h2>
        <Link to="/consultations">Повернутися до консультацій</Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{consultation.title}</h1>
      <p className={styles.description}>{consultation.description}</p>
      {consultation.image && (
        <img
          src={consultation.image}
          alt={consultation.title}
          className={styles.image}
        />
      )}
      <br />
      <Link to="/consultations">Повернутися до консультацій</Link>
    </div>
  )
}

export default ConsultationDetailsPage
