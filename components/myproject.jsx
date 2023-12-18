import styles from '@/styles/myproject.module.css'
import Link from 'next/link'

export function MyProject()
{
     
        return      <div id='anchor_2' className={styles.myProjectContainer}>
                               <div className={styles.title}>Mes projets 👷‍♂️</div>
                               <div className={styles.content}>
                                     
                                     {/* <ExportElem title={"Webdu229"} desc={"Faire la promotion de la culture Béninoise à travers des jeux et applications,tel est l'objectif de Webdu229"} 
                                     imglink={'c1_1.jpeg'} sitelink={'https://webdu229.vercel.app/'}/> */}
                                     <ExportElem title={"Le musée du Web"} desc={"Un espace 3D vous donnant un aperçus de quelques oeuvres d'Art béninoises"} 
                                     imglink={'c1_2.jpeg'} sitelink={'https://museedu229.vercel.app/'} />
                                     <ExportElem title={"Chop Master"} desc={"Un mini Jeux 3D pour passer le temp 🕹"} 
                                     imglink={'c1_3.png'} sitelink={'https://chopmaster.vercel.app/'} />
                                     
                                     

                               </div>

 
                    </div>
         
}

function ExportElem(props)
{
            
                        
              return    <>

                              <div className={`${styles.content_elem}`}>
                                    <div className={`${styles.content_elem_1}`}>
                                          <div className={styles.content_elem_1_desc}>
                                                
                                                <div className={styles.content_elem_1_titledesc}>
                                                      <div className={styles.content_elem_1_title}>
                                                            {props.title}
                                                      </div>
                                                      <div className={styles.content_elem_1_Elemdesc}>
                                                            {props.desc}
                                                      </div>
                                                </div>
                                                <div className={styles.content_elem_1_linkContainer}>
                                                      <div className={styles.content_elem_1_button}>
                                                            <a className={styles.content_elem_1_button_link} target='_blank' href={props.sitelink} >Voir</a>
                                                      </div>
                                                </div>
                                          </div>
                                          <img className={`${styles.content_elem_1_img}`} src={props.imglink} ></img>
                                    </div>
                              </div>
                              

                        </>


                  
}