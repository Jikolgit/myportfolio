import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/navbar'
import { Banner } from '@/components/banner'
import { AboutMe } from '@/components/aboutme'
import { MyProject } from '@/components/myproject'
import { Contact } from '@/components/contact'
import { _Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdel BIO</title>
        <meta name="description" content="Abdel Bio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoblack.png" />
      </Head>
      <NavBar />
      <main className={`${styles.main}`}>
        <Banner />
        <AboutMe />
        <MyProject />
        <Contact />
        <_Footer />
      </main>
      <footer></footer>
    </>
  )
}
