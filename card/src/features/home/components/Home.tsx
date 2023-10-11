import styles from './Home.module.css'
import Card from '../../../core/components/Card/Card'

const Home = () => (
  <section className={styles.section}>
    <Card
      navigateTo="/card"
      name="Olomouc"
      price={9999}
      description="Кресло желтое, IKEA"
      img="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    />
  </section>
)

export default Home
