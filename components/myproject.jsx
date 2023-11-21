import styles from '@/styles/myproject.module.css'
import Link from 'next/link'

export function MyProject()
{
     
        return      <div id='anchor_2' className={styles.myProjectContainer}>
                               <div className={styles.title}>Mes projets 👷‍♂️</div>
                               <div className={styles.content}>
                                     <div className={`${styles.content_elem}`}>
                                            <div className={`${styles.content_elem_1}`}>
                                                   <div className={styles.content_elem_1_desc}>
                                                            
                                                            <div className={styles.content_elem_1_titledesc}>
                                                                  <div className={styles.content_elem_1_title}>
                                                                        Webdu229
                                                                  </div>
                                                                  <div className={styles.content_elem_1_Elemdesc}>
                                                                        Faire la promotion de la culture Béninoise à travers des jeux et applications,
                                                                        tel est l'objectif de Webdu229 
                                                                  </div>
                                                            </div>
                                                            <div className={styles.content_elem_1_linkContainer}>
                                                                  <div className={styles.content_elem_1_button}>Voir</div>
                                                            </div>
                                                   </div>
                                                   <img className={`${styles.content_elem_1_img}`} src='c1_1.jpeg'></img>
                                            </div>
                                     </div>

                                     <div className={`${styles.content_elem}`}>
                                            <div className={`${styles.content_elem_1}`}>
                                                   <div className={styles.content_elem_1_desc}>
                                                            
                                                            <div className={styles.content_elem_1_titledesc}>
                                                                  <div className={styles.content_elem_1_title}>
                                                                        Le musée du Web
                                                                  </div>
                                                                  <div className={styles.content_elem_1_Elemdesc}>
                                                                        Un espace 3D vous donnant un aperçus de quelques oeuvres d'Art béninoises
                                                                  </div>
                                                            </div>
                                                            <div className={styles.content_elem_1_linkContainer}>
                                                                  <div className={styles.content_elem_1_button}>Voir</div>
                                                            </div>
                                                   </div>
                                                   <img className={`${styles.content_elem_1_img}`} src='c1_2.jpeg'></img>
                                            </div>
                                     </div>
                                     

                               </div>

 
                    </div>
         
}