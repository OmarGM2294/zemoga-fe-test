import React from 'react'
import Image from 'next/image'

import styles from '../../styles/components/Banner.module.scss'

const Banner = () => {
  const [show, setShow] = React.useState(true)

  if (show) {
    return (
      <aside className={styles.banner} role="doc-tip" aria-label="Speak Out">
        <div className={styles.left}>
          <span className={styles.hairline}>Speak out. Be heard.</span>
          <span className={styles.title}>Be counted</span>
        </div>
        <div className={styles.right}>
          <p>
            Rule of Thumb is a crowd sourced court of public opinion where anyone
            and everyone can speak out and speak freely. It’s easy: You share your
            opinion, we analyze and put the data in a public report.
          </p>
        </div>
        <button
          className={styles.button}
          aria-label="close"
          onClick={() => setShow(false)}>
          <Image alt="Close" layout="fill" src="/images/close.svg" />
        </button>
      </aside>
    )
  } else {
    return null
  }
}

export default Banner
