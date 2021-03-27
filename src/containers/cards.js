import React from 'react'

import styles from '../../styles/components/Cards.module.scss'
import Card from '../components/card'
import Dropdown from '../components/dropdown'

const Cards = (props) => {
  const [selected, setSelected] = React.useState('List')

  const processData = () => {
    if (props.data.length > 0) {
      return props.data.map((card, index) => (
        <Card data={card} key={index} type={selected} />
      ))
    } else {
      return <i>There is no cards to show</i>
    }
  }

  return (
    <main className={styles.cards}>
      <div className={styles.header}>
        <h2>Previous Rulings</h2>
        <Dropdown
          event={
            <button className={styles.button}>
              <span>{selected}</span>
              <div className={styles.triangle}></div>
            </button>
          }
          customStyle={styles.dropdown}
        >
          <ul>
            <li onClick={() => setSelected('List')}>
              <a href="#">List</a>
            </li>
            <li onClick={() => setSelected('Grid')}>
              <a href="#">Grid</a>
            </li>
          </ul>
        </Dropdown>
      </div>
      <div
        className={`${styles.container} ${
          selected === 'List' ? styles.list : styles.grid
        }`}
      >
        {processData()}
      </div>
    </main>
  )
}

export default Cards
