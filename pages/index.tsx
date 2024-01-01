import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/navbar'
import { Banner } from '@/components/banner'
import { AboutMe } from '@/components/aboutme'
import { MyProject } from '@/components/myproject'
import { Contact } from '@/components/contact'
import { _Footer } from '@/components/footer'
import { createContext, useState } from 'react'

let vAny: any = null;
export let indexContext = createContext(vAny);

export default function Home() {

  let [lang,setLang] = useState('FR');
  return (
    <>
      <Head>
        <title>Abdel BIO</title>
        <meta name="description" content="Abdel Bio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoblack.png" />
      </Head>
      
      
            <indexContext.Provider value={{lang,setLang}}>
                <NavBar />
                <main className={`${styles.main}`}>
                  <Banner />
                  <AboutMe />
                  <MyProject />
                  <Contact />
                  
                </main>
                <footer>
                  <_Footer />
                </footer>
            </indexContext.Provider>
      
    </>
  )
}
