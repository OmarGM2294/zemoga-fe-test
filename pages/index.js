import Header from '../src/components/header'
import Banner from '../src/components/banner'
import Hero from '../src/components/hero'
import Cards from '../src/containers/cards'
import BottomBanner from '../src/components/bottom-banner'
import Footer from '../src/components/footer'

import styles from '../styles/views/Home.module.scss'

export default function Home(props) {
  return (
    <>
      <Header />
      <Hero />
      <div className={styles.container}>
        <Banner />
        <Cards data={props.data} />
        <BottomBanner />
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3000/api/data').then((res) =>
    res.json()
  )

  return {
    props: {
      data,
    },
  }
}
