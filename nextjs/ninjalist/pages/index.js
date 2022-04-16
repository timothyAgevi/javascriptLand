import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1> Homepage</h1>
      <p>lorem nfgjlkgjsd;fS;lgjklkjlkfnkl  </p>
      <p> loremfkgjdbfjksfklasj</p>
      <Link href="/ninjas">
        <a> See Ninjas Listing</a>
      </Link>
      <Footer/>
    </div>
  )
}
