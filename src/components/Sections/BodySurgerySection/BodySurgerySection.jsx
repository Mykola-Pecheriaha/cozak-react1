import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BodySurgerySection.module.css'
import bodiPlastic from '../../../assets/images/bodi1.jpg'

const BodySurgerySection = () => {
  return (
    <div className={styles.bodySurgerySection}>
      <div className={styles.textBody}>
        <h2>Пластика тіла</h2>
        <p>
          Пластична хірургія тіла включає різні види процедур, що допомагають
          коригувати контури тіла, покращити зовнішній вигляд та підвищити
          впевненість.
        </p>
        <ul className={styles.operationsList}>
          <li>
            <Link to="/operation/abdominoplasty">Абдомінопластика</Link>
          </li>
          <li>
            <Link to="/operation/liposuction">Корекційна ліпосакція</Link>
          </li>
          <li>
            <Link to="/operation/gluteal-prosthetics">
              Протезування сідниць
            </Link>
          </li>
          <li>
            <Link to="/operation/scar-correction">Корекція рубців</Link>
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img src={bodiPlastic} alt="" className={styles.bodyImage} />
      </div>
    </div>
  )
}

export default BodySurgerySection
