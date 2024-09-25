import { Link } from 'react-router-dom'
import styles from './GlutealProsthetics.module.css'

const GlutealProsthetics = () => {
  return (
    <div>
      <h1>Корекція сідниць</h1>
      <p>Опис процедури...</p>

      {/* Кнопка повернення на головну */}
      <Link to="/">
        <button className={styles.button}>Повернутися на головну</button>
      </Link>
    </div>
  )
}

export default GlutealProsthetics
