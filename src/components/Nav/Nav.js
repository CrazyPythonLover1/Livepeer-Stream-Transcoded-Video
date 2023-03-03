import React from 'react'
import styles from '@components/styles/Home.module.css'
import Link from 'next/link'

function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link className={styles.a} href="/">Videos</Link></li>
        <li className={styles.li}><Link className={styles.a} href="/videoUploadPage">Upload</Link></li>
      </ul>
    </nav>
  )
}

export default Nav