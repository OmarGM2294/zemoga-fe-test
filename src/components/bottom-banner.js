import React from 'react'

import styles from '../../styles/components/BottomBanner.module.scss'

const BottomBanner = () => (
  <aside className={styles.banner}>
    <h2>Is there anyone else you would want us to add?</h2>
    <button type="button">Submit a name</button>
  </aside>
)

export default BottomBanner
