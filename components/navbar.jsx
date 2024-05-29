import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import {navbartext} from './text.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { indexContext } from '@/pages/index.tsx';

export function NavBar()
{
    let valContext = useContext(indexContext);
//     let [mobileMenuCss,setmobileMenuCss] = useState(styles.navbar_mobile); 
    let [navBarBackCss,setnavBarBackCss] = useState(styles.navbarBack);
    let [navBarContainerCss,setnavBarContainerCss] = useState(styles.navbar)
    let mobileMenuOpen = useRef(false);
    let [tradIconContent,setTradIconContent] = useState("EN");
    let langIconSrc = useRef("enicon.png");
    let langSrc = useRef(navbartext.EN);


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
            
                evt.preventDefault();
                
                if(!mobileMenuOpen.current)
                {
                        // setmobileMenuCss(c => c = `${styles.navbar_mobile} ${styles.navbar_mobile_open}`)
                        setnavBarBackCss(c => c = `${styles.navbarBack} ${styles.navbarBack_visible}`)

                }
                else
                {
                        // setmobileMenuCss(c => c =  `${styles.navbar_mobile}`)
                        setnavBarBackCss(c => c = `${styles.navbarBack}`)

                }
                mobileMenuOpen.current = !mobileMenuOpen.current;
                
        }
        let switchLang = (evt)=>
        {
                evt.preventDefault();
                if(valContext.lang == 'EN')
                {
                        valContext.setLang(c => c = "FR");
                        langIconSrc.current = "fricon.png";
                        langSrc.current = navbartext.FR;
                }
                else
                {
                        valContext.setLang(c => c = "EN")
                        langIconSrc.current = "enicon.png";
                        langSrc.current = navbartext.EN;
                }
        }

    useEffect(()=>
    {
        window.addEventListener('scroll',(evt)=>
        {
                

                if(window.scrollY > 500)
                {
                        setnavBarContainerCss(`${styles.navbar} ${styles.navbarActive} `)
                }
                else
                {
                        setnavBarContainerCss(`${styles.navbar}`)
                }
        })
    },[])
    return <header>
                    <div className={styles.navbarcontainer}>
                            <div className={navBarContainerCss} >
                                    <div className={styles.logo}>
                                            <img className={styles.logo_img} src='logowhite.png' rel='logo' ></img>
                                    </div> 
                                    <div className={styles.navbarmenu}>
                                            <ul className={styles.listul}>
                                                <li className={styles.listli}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_1',false)}} className={styles.listLink} href={'#'} >{langSrc.current.menu_1}</Link> </li>
                                                <li className={styles.listli}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_2',false)}} className={styles.listLink} href={'#'} >{langSrc.current.menu_2}</Link></li>
                                                <li className={styles.listli}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_3',false)}} className={styles.listLink} href={'#'} >{langSrc.current.menu_3}</Link></li>
                                                <li className={styles.listli}><img onClick={switchLang} src={langIconSrc.current} className={styles.tradBUtton} ></img> </li>
                                            </ul>
                                    </div>
                                    <div onClick={(evt)=>{openMobileMenu(evt)}} className={styles.navbarmenumobile_icon}>
                                           {/* <img className={styles.navbarmenumobile_icon_img} src='menu.png' alt="menu"></img> */}
                                           {mobileMenuOpen.current?
                                                
                                                <svg fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.25 17.25 6.75 6.75" />
                                                <path d="m17.25 6.75-10.5 10.5" />
                                                </svg>
                                                :
                                                <svg  fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 7.5h16.5" />
                                                <path d="M3.75 12h16.5" />
                                                <path d="M3.75 16.5h16.5" />
                                                </svg>
                                                
                                                
                                           }
                                                
                                    </div>
                            </div>
                            <div  className={`absolute w-full max-w-[1500px] 
                                              ${mobileMenuOpen.current? 'top-[50px]':'top-[-220px]'}
                                              left-[0] right-[0] mx-auto flex justify-between bg-[#17234D] z-[2]
                                              transition-[top] duration-[200ms] `} >
                                    <div  className={styles.navbarmenu_mobile}>
                                            <ul className={styles.listul_mobile}>
                                                <li className={styles.listli_mobile}> <Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_1',true)}} className={styles.listLink} href={'#'} >{langSrc.current.menu_1}</Link> </li>
                                                <li className={styles.listli_mobile}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_2',true)}} className={styles.listLink} href={'#'} >{langSrc.current.menu_2}</Link></li>
                                                <li className={styles.listli_mobile}><Link onClick={(evt)=>{scrollSmooth(evt,'#anchor_3',true)}} className={styles.listLink} href={'#'} >{langSrc.current.menu_3}</Link></li>
                                                <li className={styles.listli}><img onClick={switchLang} src={langIconSrc.current} className={styles.tradBUtton} ></img></li>
                                            </ul>
                                    </div>
                            </div>
                    </div>

                    <div onClick={(evt)=>{openMobileMenu(evt)}} className={navBarBackCss}></div>
          </header>
}