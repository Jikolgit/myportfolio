import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/navbar'
import { Banner } from '@/components/banner'
import { AboutMe, WhatCanIDo } from '@/components/aboutme'
import { DescriptionElem, MyProject } from '@/components/myproject'
import { Contact } from '@/components/contact'
import { _Footer } from '@/components/footer'
import { createContext, useRef, useState } from 'react'

let vAny: any = null;
export let indexContext = createContext(vAny);

export default function Home() {

  let [lang,setLang] = useState('EN');
  let descriptionObj = useRef({coverSrc:null,title:null,desc:null,tools:[],siteLink:null});
  let [showDescription,setShowDescription] = useState(false);
  return (
    <>
      <Head>
        <title>Abdel BIO</title>
        <meta name="description" content="Abdel Bio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoblack.png" />
      </Head>
      
      
            <indexContext.Provider value={{lang,setLang,showDescription,setShowDescription,descriptionObj}}>
                <NavBar />
                <main className={`${styles.main}`}>
                  <Banner />
                  <AboutMe />
                  {/* <WhatCanIDo /> */}
                  <MyProject />
                  <Contact />
                  
                </main>
                {showDescription && <DescriptionElem />}
                <_Footer />
               
            </indexContext.Provider>
      
    </>
  )
}
