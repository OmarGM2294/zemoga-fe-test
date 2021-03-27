import React from 'react'
import Image from 'next/image'

import styles from '../../styles/components/Header.module.scss'
import Dropdown from './dropdown'

const Header = () => {
  const [show, setShow] = React.useState(false)
  const [searchText, setSearchText] = React.useState('')

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1>Rule of thumb.</h1>
        <Dropdown
          event={
            <button className={styles.menu}>
              <Image alt="Menu" src="/images/hamburger.svg" layout="fill" />
            </button>
          }
          customStyle={styles.dropdown}
        >
          <ul className={styles.noStyleList}>
            <li className={styles.item}>
              <a href="#">Past Trials</a>
            </li>
            <li className={styles.item}>
              <a href="#">How It Works</a>
            </li>
            <li className={styles.item}>
              <a href="#">Login / Sign Up</a>
            </li>
          </ul>
        </Dropdown>
        <ul className={`${styles.list} ${styles.noStyleList}`}>
          <li>
            <a href="#">Past Trials</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Login / Sign Up</a>
          </li>
          <li>
            <form action="#" className={styles.form}>
              {show ? (
                <input
                  aria-label="search"
                  type="text"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  className={styles.searchBar}
                />
              ) : null}
              <button
                className={styles.search}
                aria-label="Search"
                onClick={() =>
                  !show ? setShow(true) : searchText ? null : setShow(false)
                }
                type={show && searchText !== '' ? "submit" : "button"}
              >
                <Image src="/images/search.svg" alt="Search" layout="fill" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
