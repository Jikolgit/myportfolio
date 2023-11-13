import styles from '@/styles/navbar.module.css'
import Link from 'next/link'

export function NavBar()
{
    return <header>
                    <div className={styles.navbarcontainer}>
                            <div className={styles.navbar} >
                                    <div className={styles.logo}>
                                            <img className={styles.logo_img} src='logowhite.png' rel='logo' ></img>
                                    </div>
                                    <div className={styles.navbarmenu}>
                                            <ul className={styles.listul}>
                                                <li className={styles.listli}> <Link className={styles.listLink} href={'#about'} >A propos</Link> </li>
                                                <li className={styles.listli}><Link className={styles.listLink} href={'#about'} >Realisation</Link></li>
                                                <li className={styles.listli}><Link className={styles.listLink} href={'#about'} >Contact</Link></li>
                                            </ul>
                                    </div>
                                    <div className={styles.navbarmenumobile_icon}>
                                           <img className={styles.navbarmenumobile_icon_img} src='menu.png' alt="menu"></img>
                                    </div>
                            </div>
                    </div>
          </header>
}