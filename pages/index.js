import Header from '../src/components/header'
import Banner from '../src/components/banner'
import Hero from '../src/components/hero'
import BottomBanner from '../src/components/bottom-banner'
import Footer from '../src/components/footer'

import styles from '../styles/views/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className={styles.container}>
        <Banner />
        <BottomBanner />
        <Footer />
      </div>
    </>
  )
}
