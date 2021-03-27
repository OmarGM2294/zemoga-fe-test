import React from 'react'
import Image from 'next/image'

import styles from '../../styles/components/Card.module.scss'

const Card = (props) => {
  const {
    data,
    data: { votes },
  } = props
  const background = `linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 16%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%), url('/images/cards/${data.picture}')`
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  })

  const timeSince = (last) => {
    const date = new Date(last)
    let seconds = Math.floor((new Date() - date) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) {
      let time = Math.floor(interval)
      return `${time} year${time !== 1 ? 's' : ''}`
    }
    interval = seconds / 2592000
    if (interval > 1) {
      let time = Math.floor(interval)
      return `${time} month${time !== 1 ? 's' : ''}`
    }
    interval = seconds / 86400
    if (interval > 1) {
      let time = Math.floor(interval)
      return `${time} day${time !== 1 ? 's' : ''}`
    }
    interval = seconds / 3600
    if (interval > 1) {
      let time = Math.floor(interval)
      return `${time} hour${time !== 1 ? 's' : ''}`
    }
    interval = seconds / 60
    if (interval > 1) {
      let time = Math.floor(interval)
      return `${time} minute${time !== 1 ? 's' : ''}`
    }
    let time = Math.floor(interval)
    return `${time} second${time !== 1 ? 's' : ''}`
  }

  const calcVotes = (votes) => {
    const total = props.data.votes.positive + props.data.votes.negative
    return `${((votes * 100) / total).toFixed(2)}%`
  }

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const renderStyles = () => {
    if (windowSize.width >= 768 && props.type === 'List') {
      return background
    } else {
      return `url('/images/cards/${data.picture}')`
    }
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize()
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{ backgroundImage: renderStyles() }}
      className={`${styles.card} ${
        props.type === 'List' ? styles.list : styles.grid
      }`}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.left}>
            <h3>{data.name}</h3>
            <p className={styles.description}>{data.description}</p>
          </div>
          <div className={styles.right}>
            <p className={styles.last}>
              {timeSince(data.lastUpdated)} ago in <span>{data.category}</span>
            </p>
            <div className={styles.buttons}>
              <button>
                <div className={styles.thumbs}>
                  <Image src="/images/thumbs-up.svg" layout="fill" />
                </div>
              </button>
              <button>
                <div className={styles.thumbs}>
                  <Image src="/images/thumbs-down.svg" layout="fill" />
                </div>
              </button>
              <button>Vote Now</button>
            </div>
          </div>
        </div>
        <div className={styles.values}>
          <div
            className={styles.up}
            style={{ flexBasis: calcVotes(votes.positive) }}
          >
            <div className={styles.floating}>
              <div className={styles.thumbs}>
                <Image src="/images/thumbs-up.svg" layout="fill" />
              </div>
              <span>{calcVotes(votes.positive)}</span>
            </div>
          </div>
          <div
            className={styles.down}
            style={{ flexBasis: calcVotes(votes.negative) }}
          >
            <div className={styles.floating}>
              <div className={styles.thumbs}>
                <Image src="/images/thumbs-down.svg" layout="fill" />
              </div>
              <span>{calcVotes(votes.negative)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.general}>
        <div
          className={votes.positive > votes.negative ? styles.up : styles.down}
        >
          <div className={styles.floating}>
            <div className={styles.thumbs}>
              <Image
                src={`/images/thumbs-${
                  votes.positive > votes.negative ? 'up' : 'down'
                }.svg`}
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
