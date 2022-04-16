import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
     
      <h1 className={styles.title}> Homepage</h1>
      <p className={styles.text}>lorem nfgjlkgjsd;fS;lgjklkjlkfnkl  </p>
      <p className={styles.text}> loremfkgjdbfjksfklasj</p>
      <Link href="/ninjas">
        <a className={styles.btn}> See Ninjas Listing</a>
      </Link>
     
    </div>
  )
}
