import React from 'react'

import styles from '../../styles/components/Dropdown.module.scss'

const Dropdown = (props) => {
  const [show, setShow] = React.useState(false)
  const dropdownRef = React.useRef()

  React.useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false)
      }
    })
  }, [])

  return (
    <div className={styles.dropdown}>
      <div onClick={() => setShow(!show)}>{props.event}</div>
      {show ? (
        <div
          ref={dropdownRef}
          onClick={() => setShow(false)}
          className={`${styles.content} ${
            props.customStyle ? props.customStyle : ''
          }`}
        >
          {props.children}
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
