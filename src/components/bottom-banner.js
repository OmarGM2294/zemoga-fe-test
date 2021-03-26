import React from 'react'
import Image from 'next/image'

import styles from '../../styles/components/BottomBanner.module.scss'

const BottomBanner = () => (
  <aside className={styles.banner}>
    <div className={styles.background}>
      <Image
        layout="fill"
        className={styles.image}
        src="/images/bg-people.@2x.png"
      />
    </div>
    <h2>Is there anyone else you would want us to add?</h2>
    <button type="button">Submit a name</button>
  </aside>
)

export default BottomBanner
