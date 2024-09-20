// components/Sections/BreastSurgerySection.js
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BreastSurgerySection.module.css'
import mammoplastyc from '../../../assets/images/1mammoplasty.jpg'

const BreastSurgerySection = () => {
  return (
    <div className={styles.breastSurgerySection}>
      <div className={styles.imageContainer}>
        <img src={mammoplastyc} alt="Breast" className={styles.breastImage} />
      </div>

      <div className={styles.textBreast}>
        <h2>Пластика грудей</h2>
        <p>
          Для мене, як пластичного хірурга, це не просто операція – це втілення
          однієї мрії. Для мене дуже важливо, щоб ви отримали бажаний результат
          та, з професійної точки, максимально пропорційний вашому тілу розмір
          та форму грудей.
        </p>
        <ul className={styles.operationsList}>
          <li>
            <Link to={`/operation/${encodeURIComponent('augmentation')}`}>
              Збільшення грудей
            </Link>
          </li>
          <li>
            <Link to={`/operation/${encodeURIComponent('reduction')}`}>
              Зменшення грудей
            </Link>
          </li>
          <li>
            <Link to={`/operation/${encodeURIComponent('lift')}`}>
              Підтяжка грудей
            </Link>
          </li>
          <li>
            <Link to={`/operation/${encodeURIComponent('Gynecomastia')}`}>
              Видалення гінекомастії
            </Link>
          </li>
          <li>
            <Link
              to={`/operation/${encodeURIComponent(
                'areola and nipple correction'
              )}`}
            >
              Корекція ареоли та соска молочної залози
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BreastSurgerySection
