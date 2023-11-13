import styles from '@/styles/aboutme.module.css'
import Link from 'next/link'

export function AboutMe()
{
     
        return      <div className={styles.aboutmeContainer}>
                               <div className={styles.title}>Qui suis je ?</div>
                               <div className={styles.content}>
                                      <div className={styles.content_pic} >
                                                <img  className={styles.content_pic_img} src='ppic.jpg' alt='pic'></img>
                                      </div>
                                      <div className={styles.content_text} >
                                                <div className={styles.content_text_1}>
                                                        Moi c'est Abdel BIO Je designe et développe 
                                                        des sites web. Artisan du web depuis 5 ans.
                                                </div>
                                                <div className={styles.content_text_2}>
                                                        <span className={styles.content_text_special} >Email</span> zbio234@gmail.com
                                                </div>
                                                <div className={styles.content_text_3}>
                                                        <span className={styles.content_text_special}>Résidence</span> Cotonou
                                                </div>
                                      </div>
                               </div>

                               <div className={styles.title_2}>Compétences</div>
                               <div className={styles.content_2}>
                                        <img className={styles.content_2_img} src='logohtml5.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logojs.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logoreact.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logolaravel.png' alt='logo'></img>

                               </div>


                    </div>
         
}