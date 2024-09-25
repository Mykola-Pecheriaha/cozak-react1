import { React } from 'react'
import operationsData from '../../../../data/operationsData'
import styles from './Abdominoplasty.module.css'

const Abdominoplasty = () => {
  // Знаходимо дані про операцію
  const abdominoplasty = operationsData.operations.find(
    (item) => item.title === 'Abdominoplasty'
  )

  // Якщо дані не знайдені
  if (!abdominoplasty) {
    return <div>Операцію не знайдено</div>
  }

  // Деструктуризація основних полів операції
  const {
    title,
    description,
    image,
    consultation,
    preparation,
    surgery,
    rehabilitation,
    results,
  } = abdominoplasty

  return (
    <div className={styles.abdominoplastyContainer}>
      {/* Заголовок та опис */}
      <h2>{title}</h2>
      <section className={styles.sectionAbdominoplasty}>
        <div className={styles.textTitle}>
          <p>{description}</p>
        </div>
        <div className={styles.imgTitle}>
          {image && <img src={image} alt={title} />}
        </div>
      </section>

      {/* Консультація */}
      {consultation && (
        <section className={styles.sectionAbdominoplasty}>
          <h2>{consultation.title}</h2>
          <div className={styles.consultationContainer}>
            <div className={styles.consultationImage}>
              {consultation.image && <img src={consultation.image} alt="" />}
            </div>
            <div className={styles.consultationText}>
              <div dangerouslySetInnerHTML={{ __html: consultation.details }} />
            </div>
          </div>
        </section>
      )}

      {/* Підготовка до операції */}
      {preparation && (
        <section className={styles.sectionPreparation}>
          <h2>{preparation.title}</h2>
          <div className={styles.preparationContainer}>
            <div className={styles.preparationText}>
              {preparation.steps.map((step, index) => (
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
              {preparation.image && <img src={preparation.image} alt="" />}
            </div>
          </div>
        </section>
      )}

      {/* Опис операції */}
      {surgery && (
        <section className={styles.sectionSurgery}>
          <h2>{surgery.title}</h2>
          <div className={styles.surgeryContainer}>
            <div className={styles.surgeryImages}>
              {Array.isArray(surgery.image) ? (
                surgery.image.map((img, index) => (
                  <div
                    key={index}
                    className={`${styles.surgeryImage} ${
                      index % 2 === 0 ? styles.even : styles.odd
                    }`}
                  >
                    <img src={img} alt={`Surgery process ${index + 1}`} />
                  </div>
                ))
              ) : (
                <div className={styles.surgeryImage}>
                  <img src={surgery.image} alt="Surgery process" />
                </div>
              )}
            </div>
            <div className={styles.surgeryText}>
              {surgery.description.split('\n').map((paragraph, index) => {
                const methodMatch = paragraph.match(/^([А-Яа-яІіЇїЄєґ'() ]+)\./)
                if (methodMatch) {
                  return (
                    <p key={index}>
                      <span className={styles.highlightSubtitle}>
                        <strong>{methodMatch[1]}</strong>
                      </span>
                      {paragraph.replace(methodMatch[0], '').trim()}
                    </p>
                  )
                }
                return <p key={index}>{paragraph.trim()}</p>
              })}
            </div>
          </div>
        </section>
      )}

      {/* Реабілітація */}
      {rehabilitation && (
        <section className={styles.sectionReabilitation}>
          <h2>{rehabilitation.title}</h2>
          <div className={styles.rehabilitationContainer}>
            <div className={styles.rehabilitationImage}>
              <img src={rehabilitation.image} alt="" />
            </div>
            <div className={styles.rehabilitationText}>
              <ul>
                {rehabilitation.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Результати операції */}
      {results && (
        <section className={styles.sectionResults}>
          <h2>{results.title}</h2>
          <div className={styles.resultsContainer}>
            <div className={styles.resultsText}>
              <p>{results.description}</p>
            </div>
            <div className={styles.resultsImage}>
              <img src={results.image} alt="" />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Abdominoplasty
