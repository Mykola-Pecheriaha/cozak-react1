import { Link } from 'react-router-dom'
import styles from './ScarCorrection.module.css'

const ScarCorrection = () => {
  return (
    <div>
      <h1>Ліпосакція</h1>
      <p>Опис процедури...</p>

      {/* Кнопка повернення на головну */}
      <Link to="/">
        <button className={styles.button}>Повернутися на головну</button>
      </Link>
    </div>
  )
}

export default ScarCorrection
