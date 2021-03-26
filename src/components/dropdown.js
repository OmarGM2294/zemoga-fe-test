import React from 'react'

import styles from '../../styles/components/Dropdown.module.scss'

const Dropdown = (props) => {
  const [show, setShow] = React.useState(false)

  return (
    <div className={styles.dropdown}>
      <div onClick={() => setShow(!show)}>{props.event}</div>
      {show ? (
        <div className={`${styles.content} ${props.customStyle}`}>
          {props.children}
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
