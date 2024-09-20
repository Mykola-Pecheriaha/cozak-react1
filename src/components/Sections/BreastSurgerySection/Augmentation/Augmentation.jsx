import React from 'react'
import operationsData from '../../../../data/operationsData'
import styles from './Augmentation.module.css'

const Augmentation = () => {
  const augmentation = operationsData.operations.find(
    (op) => op.title === 'Augmentation'
  )

  // Додаємо перевірки для запобігання помилок
  if (!augmentation) {
    return <div>Операцію не знайдено</div>
  }

  return (
    <div className={styles.augmentationContainer}>
      <h2>{augmentation.title}</h2>
      <section className={styles.sectionAugmentalis}>
        <div className={styles.textTitle}>
          <p>{augmentation.description}</p>
        </div>
        <div className={styles.imgTitle}>
          {augmentation.image && (
            <img src={augmentation.image} alt={augmentation.title} />
          )}
        </div>
      </section>

      <section className={styles.sectionConsultation}>
        <h2>{augmentation.consultation.title}</h2>
        <div className={styles.consultationContainer}>
          <div className={styles.consultationImage}>
            {augmentation.consultation.image && (
              <img src={augmentation.consultation.image} alt="" />
            )}
          </div>
          <div className={styles.consultationText}>
            {/* Оновлено: Використовуємо dangerouslySetInnerHTML */}
            <div
              dangerouslySetInnerHTML={{
                __html: augmentation.consultation.details,
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionPreparation}>
        <h2>{augmentation.preparation.title}</h2>
        <div className={styles.preparationContainer}>
          <div className={styles.preparationText}>
            {augmentation.preparation.steps.map((step, index) => (
              <div
                key={index}
                className={
                  index === 0 || step === '' ? styles.highlightedStep : ''
                }
              >
                {step}
              </div>
            ))}
          </div>
          <div className={styles.preparationImage}>
            {augmentation.preparation.image && (
              <img src={augmentation.preparation.image} alt="" />
            )}
          </div>
        </div>
      </section>

      <section className={styles.sectionSurgery}>
        <h2>{augmentation.surgery.title}</h2>
        <div className={styles.surgeryContainer}>
          <div className={styles.surgeryText}>
            <p>{augmentation.surgery.description}</p>
          </div>
          <div className={styles.surgeryImage}>
            <img src={augmentation.surgery.image} alt="" />
          </div>
        </div>
      </section>

      <section className={styles.sectionReabilitation}>
        <h2>{augmentation.rehabilitation.title}</h2>
        <div className={styles.rehabilitationContainer}>
          <div className={styles.rehabilitationImage}>
            <img src={augmentation.rehabilitation.image} alt="" />
          </div>
          <div className={styles.rehabilitationText}>
            <ul>
              {augmentation.rehabilitation.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionResults}>
        <h2>{augmentation.results.title}</h2>
        <div className={styles.resultsContainer}>
          <div className={styles.resultsText}>
            <p>{augmentation.results.description}</p>
          </div>
          <div className={styles.resultsImage}>
            <img src={augmentation.results.image} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Augmentation
