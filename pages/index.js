import Header from '../src/components/header';
import Footer from '../src/components/footer';

import styles from '../styles/views/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  )
}
