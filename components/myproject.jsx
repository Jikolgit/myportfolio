import styles from '@/styles/myproject.module.css'

import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { indexContext } from '@/pages/index.tsx';
import { myprojecttext } from './text';
export function MyProject()
{
     
      let valContext = useContext(indexContext);
      let langSrc = useRef(myprojecttext.EN);
      
      if(valContext.lang == 'EN')
         {
                 
                 langSrc.current = myprojecttext.EN;
         }
         else
         {
                 langSrc.current = myprojecttext.FR;
         }

        return      <div id='anchor_2' className={styles.myProjectContainer}>
                               <div className={styles.title}>{langSrc.current.title}</div>
                               <div className={styles.content}>
                                     
                                     {/* <ExportElem title={"Webdu229"} desc={"Faire la promotion de la culture Béninoise à travers des jeux et applications,tel est l'objectif de Webdu229"} 
                                     imglink={'c1_1.jpeg'} sitelink={'https://webdu229.vercel.app/'}/> */}
                                     <ExportElem title={"Neo Market"} desc={langSrc.current.txt_1} sitelink={'https://nmarket-online.vercel.app/'}
                                     imglink={'c1_4.png'} />
                                     <ExportElem title={"Le musée du Web"} desc={langSrc.current.txt_2} 
                                     imglink={'c1_2.jpeg'} sitelink={'https://museedu229.vercel.app/'} />
                                     <ExportElem title={"Chop Master"} desc={langSrc.current.txt_3} 
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