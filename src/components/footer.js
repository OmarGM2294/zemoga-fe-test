import React from 'react';
import Image from 'next/image';

import styles from '../../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <ul>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <span>Follow us</span>
        <ul>
          <li>
            <a href="#">
              <Image
                layout="fill"
                src="/images/facebook.svg"
              />
            </a>
          </li>
          <li>
            <a href="#">              
              <Image
                layout="fill"
                src="/images/twitter.svg"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;