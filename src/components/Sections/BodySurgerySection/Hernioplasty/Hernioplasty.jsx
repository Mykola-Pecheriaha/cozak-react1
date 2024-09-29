import { React } from 'react'
import operationsData from '../../../../data/operationsData'
import styles from './Hernioplasty.module.css'

const Hernioplasty = () => {
  // Знаходимо дані про операцію
  const hernioplasty = operationsData.operations.find(
    (item) => item.title === 'Hernioplasty'
  )

  // Якщо дані не знайдені
  if (!hernioplasty) {
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
  } = hernioplasty

  return (
    <div className={styles.hernioplastyContainer}>
      {/* Заголовок та опис */}
      <h2>{title}</h2>
      <section className={styles.sectionHernioplasty}>
        <div className={styles.textTitle}>
          {description.split('\n').map((paragraph, index) => {
            // Розбиваємо на сегменти для лапок
            const segments = paragraph
              .split(/("[^"]*"|'[^']*')/g)
              .map((segment, i) => {
                // Якщо сегмент в подвійних лапках
                if (segment.startsWith('"') && segment.endsWith('"')) {
                  return (
                    <span key={i} className={styles.highlightDoubleQuote}>
                      <strong>{segment.replace(/"/g, '')}</strong>
                    </span>
                  )
                }
                // Якщо сегмент в одинарних лапках
                if (segment.startsWith("'") && segment.endsWith("'")) {
                  return (
                    <span key={i} className={styles.highlightSingleQuote}>
                      <em>{segment.replace(/'/g, '')}</em>
                    </span>
                  )
                }
                // Інакше відображаємо звичайний текст
                return <span key={i}>{segment}</span>
              })
            return <p key={index}>{segments}</p>
          })}
        </div>
        <div className={styles.imgTitle}>
          {image && <img src={image} alt={title} />}
        </div>
      </section>

      {/* Консультація */}

      <h2>{consultation.title}</h2>
      {consultation && (
        <section className={styles.sectionСonsultation}>
          <div className={styles.consultationImage}>
            {consultation.image && <img src={consultation.image} alt="" />}
          </div>
          <div className={styles.consultationText}>
            <div dangerouslySetInnerHTML={{ __html: consultation.details }} />
          </div>
        </section>
      )}

      {/* Підготовка до операції */}

      <h2>{preparation.title}</h2>
      {preparation && (
        <section className={styles.sectionPreparation}>
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
              {preparation.image && (
                <img src={preparation.image} alt="Preparation" />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Опис операції */}
      <h2>{surgery.title}</h2>
      {surgery && (
        <section className={styles.sectionSurgery}>
          <div className={styles.surgeryContainer}>
            {/* Відображення зображень операції */}
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
            {/* Відображення опису операції з виділенням назв та тексту в лапках */}
            <div className={styles.surgeryText}>
              {surgery.description.split('\n').map((paragraph, index) => {
                // Розбиття параграфа на сегменти з текстом в подвійних і одинарних лапках
                const segments = paragraph
                  .split(/("[^"]*"|'[^']*')/g)
                  .map((segment, i) => {
                    // Виділення тексту в подвійних лапках
                    if (segment.startsWith('"') && segment.endsWith('"')) {
                      return (
                        <span key={i} className={styles.highlightDoubleQuote}>
                          <strong>{segment.replace(/"/g, '')}</strong>
                        </span>
                      )
                    }
                    // Виділення тексту в одинарних лапках
                    if (segment.startsWith("'") && segment.endsWith("'")) {
                      return (
                        <span key={i} className={styles.highlightSingleQuote}>
                          <em>{segment.replace(/'/g, '')}</em>
                        </span>
                      )
                    }
                    // Відображення звичайного тексту
                    return <span key={i}>{segment}</span>
                  })
                return <p key={index}>{segments}</p>
              })}
            </div>
          </div>
        </section>
      )}

      {/* Реабілітація */}
      <h2>{rehabilitation.title}</h2>
      {rehabilitation && (
        <section className={styles.sectionRehabilitation}>
          {/* Ліва частина з текстом */}
          <div className={styles.rehabilitationText}>
            <ul>
              {rehabilitation.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          {/* Права частина з зображенням */}
          <div className={styles.rehabilitationImage}>
            <img src={rehabilitation.image} alt="Rehabilitation process" />
          </div>
        </section>
      )}

      {/* Результати операції */}
      <h2>{results.title}</h2>
      {results && (
        <section className={styles.sectionResults}>
          {/* ліва частина з зображенням */}
          <div className={styles.resultsImage}>
            <img src={results.image} alt="Operation results" />
          </div>

          {/* права частина з текстом */}
          <div className={styles.resultsText}>
            <p>{results.description}</p>
          </div>
        </section>
      )}

      {/* Імпланти */}

      <section className={styles.sectionImplants}>
        <h2>{hernioplasty.implants.title}</h2>
        <div className={styles.implantsContainer}>
          <div className={styles.implantsText}>
            {hernioplasty.implants.description
              .split('\n')
              .map((paragraph, index) => {
                // Розбиваємо текст на сегменти для лапок
                const segments = paragraph
                  .split(/("[^"]*"|'[^']*')/g)
                  .map((segment, i) => {
                    // Якщо сегмент в подвійних лапках
                    if (segment.startsWith('"') && segment.endsWith('"')) {
                      return (
                        <span key={i} className={styles.highlightDoubleQuote}>
                          <strong>{segment.replace(/"/g, '')}</strong>
                        </span>
                      )
                    }
                    // Якщо сегмент в одинарних лапках
                    if (segment.startsWith("'") && segment.endsWith("'")) {
                      return (
                        <span key={i} className={styles.highlightSingleQuote}>
                          <em>{segment.replace(/'/g, '')}</em>
                        </span>
                      )
                    }
                    // Інакше відображаємо звичайний текст
                    return <span key={i}>{segment}</span>
                  })
                return <p key={index}>{segments}</p>
              })}
          </div>
          <div className={styles.implantsImage}>
            <img src={hernioplasty.implants.image} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hernioplasty
