import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './Banner.module.css'
import doctor from '../../assets/images/doctor.jpg'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        <h2>
          Печеряга Микола <br />
          Миколайович
        </h2>
        <p>
          Практикуючий пластичний хірург <br /> з багаторічним досвідом
        </p>
        <ul>
          <li>​​Хірург вищої категорії</li>
          <li>​​28 років досвіду</li>
          <li>​​Більше 1000 проведених операцій</li>
          <li>​Член ВАПРЕХ і ОПРЕХ</li>​
        </ul>
      </div>
      <div className={styles.bannerImage}>
        <img src={doctor} alt="Doctor" className={styles.bannerImage} />
      </div>

      {/* <br /> */}
      {/* <Link to="/portfolio" className={styles.bannerButton}>
        Перейти до портфоліо
      </Link> */}
    </div>
  )
}

export default Banner
