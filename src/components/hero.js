import React from 'react'
import Image from 'next/image'

import styles from '../../styles/components/Hero.module.scss'
import heroStyles from '../../styles/views/Home.module.scss'

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.background}>
        <Image
          layout="fill"
          src="/images/pope-francis.@2x.png"
          className={styles.image}
        />
      </div>
      <div className={heroStyles.container}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <span>What’s your opinion on</span>
            <h1>Pope Francis?</h1>
            <p>
              He’s talking tough on clergy sexual abuse, or is he just another
              pervert protector? (thumbs down) or a true pedophile punishing
              pontiff? (thumbs up)
            </p>
            <div className={styles.wikipedia}>
              <a
                href="http://wikipedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <Image src="/images/wikipedia.svg" layout="fill" />
                </div>
                More information
              </a>
            </div>
            <p className={styles.cardCTA}>What’s Your Veredict?</p>
          </div>
          <div className={styles.cardActions}>
            <button>
              <div>
                <Image src="/images/thumbs-up.svg" layout="fill" />
              </div>
            </button>
            <button>
              <div>
                <Image src="/images/thumbs-down.svg" layout="fill" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.closingGauge}>
        <div className={styles.left}>
          <span>closing in</span>
        </div>
        <div className={styles.right}>
          <span>22</span>
          <span>days</span>
        </div>
      </div>
    </header>
  )
}

export default Hero
