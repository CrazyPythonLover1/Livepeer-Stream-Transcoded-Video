import React from 'react'
import styles from '@components/styles/Home.module.css'

function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}><a className={styles.a} href="/">Videos</a></li>
        <li className={styles.li}><a className={styles.a} href="/videoUploadPage">Upload</a></li>
      </ul>
    </nav>
  )
}

export default Nav