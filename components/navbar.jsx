import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function NavBar()
{

    let [mobileMenuCss,setmobileMenuCss] = useState(styles.navbar_mobile);
    let [navBarBackCss,setnavBarBackCss] = useState(styles.navbarBack);
    let mobileMenuOpen = useRef(false);
    let scrollSmooth = function (evt,to,ismobile)
        {
                evt.preventDefault()
                document.querySelector(to).scrollIntoView({behavior: "smooth"});
                if(ismobile)
                {
                        openMobileMenu(evt)  
                }
                
        }
        let openMobileMenu = function (evt)
        {
                console.log(mobileMenuOpen.current)
                evt.preventDefault()
                
                if(!mobileMenuOpen.current)
                {
                        setmobileMenuCss(c => c = `${styles.navbar_mobile} ${styles.navbar_mobile_open}`)
                        setnavBarBackCss(c => c = `${styles.navbarBack} ${styles.navbarBack_visible}`)

                }
                else
                {
                        setmobileMenuCss(c => c =  `${styles.navbar_mobile}`)
                        setnavBarBackCss(c => c = `${styles.navbarBack}`)

                }
                mobileMenuOpen.current = !mobileMenuOpen.current;
                
        }
    return <header>
                    <div className={styles.navbarcontainer}>
                            <div className={styles.navbar} >
                                    <div className={styles.logo}>
                                            <img className={styles.logo_img} src='logowhite.png' rel='logo' ></img>
                                    </div>
                                    <div className={styles.navbarmenu}>
                                            <ul className={styles.listul}>
                                                <li className={styles.listli}> <Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_1',false)}} className={styles.listLink} href={'#'} >A propos</Link> </li>
                                                <li className={styles.listli}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_2',false)}} className={styles.listLink} href={'#'} >Realisation</Link></li>
                                                <li className={styles.listli}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_3',false)}} className={styles.listLink} href={'#'} >Contact</Link></li>
                                            </ul>
                                    </div>
                                    <div onClick={(evt)=>{openMobileMenu(evt)}} className={styles.navbarmenumobile_icon}>
                                           <img className={styles.navbarmenumobile_icon_img} src='menu.png' alt="menu"></img>
                                    </div>
                            </div>
                            <div className={mobileMenuCss} >
                                    <div className={styles.navbarmenu_mobile}>
                                            <ul className={styles.listul_mobile}>
                                                <li className={styles.listli_mobile}> <Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_1',true)}} className={styles.listLink} href={'#'} >A propos</Link> </li>
                                                <li className={styles.listli_mobile}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_2',true)}} className={styles.listLink} href={'#'} >Realisation</Link></li>
                                                <li className={styles.listli_mobile}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_3',true)}} className={styles.listLink} href={'#'} >Contact</Link></li>
                                            </ul>
                                    </div>
                            </div>
                    </div>

                    <div onClick={(evt)=>{openMobileMenu(evt)}} className={navBarBackCss}></div>
          </header>
}