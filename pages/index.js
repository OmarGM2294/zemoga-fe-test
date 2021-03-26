import Header from '../src/components/header'
import Banner from '../src/components/banner'
import Footer from '../src/components/footer'

import styles from '../styles/views/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Banner />
        <Footer />
      </div>
    </>
  )
}
