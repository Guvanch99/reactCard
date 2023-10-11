import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

type TProps = {
  img: string
  name: string
  price: number
  description: string
  navigateTo: string
}
const Card: FC<TProps> = ({
  img,
  name,
  price,
  description,
  navigateTo
}) => (
  <Link to={navigateTo} className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={img} alt={name}/>
      <p className={styles.name}>{name}</p>
    </div>
    <p className={styles.price}>{`${price.toLocaleString('cs-CZ')} Kč`}</p>
    <p className={styles.description}>{description}</p>
  </Link>
)

export default memo(Card)
