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
                               <div
                              className={` w-full max-w-[1200px] p-[10px] justify-center
                                          my-[20px] mb-[50px] 
                                          grid 
                                          gap-8 
                                          grid-cols-3
                                          
                                          mx-auto text-center
                                          max1220:grid-cols-2
                                          max850:grid-cols-1 max850:w-[80%]
                                          max600:w-[95%]
                                          
                                          `}
                              >
                                    <ExportElem title={"Neo Market"} desc={langSrc.current.txt_1} sitelink={'https://nmarket-online.vercel.app/'}
                                     imglink={'c1_4.png'} />
                                     <ExportElem title={"Le musée du Web"} desc={langSrc.current.txt_2} 
                                     imglink={'c1_2.jpeg'} sitelink={'https://museedu229.vercel.app/'} />
                                     <ExportElem title={"Chop Master"} desc={langSrc.current.txt_3} 
                                     imglink={'c1_3.png'} sitelink={'https://chopmaster.vercel.app/'} />
                                    
                                    

                              </div>
                               {/* <div className={`max-w-[1200px] mx-auto mt-[20px] `}> 
                                     
                                     <ExportElem title={"Webdu229"} desc={"Faire la promotion de la culture Béninoise à travers des jeux et applications,tel est l'objectif de Webdu229"} 
                                     imglink={'c1_1.jpeg'} sitelink={'https://webdu229.vercel.app/'}/>
                                     <ExportElem title={"Neo Market"} desc={langSrc.current.txt_1} sitelink={'https://nmarket-online.vercel.app/'}
                                     imglink={'c1_4.png'} />
                                     <ExportElem title={"Le musée du Web"} desc={langSrc.current.txt_2} 
                                     imglink={'c1_2.jpeg'} sitelink={'https://museedu229.vercel.app/'} />
                                     <ExportElem title={"Chop Master"} desc={langSrc.current.txt_3} 
                                     imglink={'c1_3.png'} sitelink={'https://chopmaster.vercel.app/'} />
                                     
                                     

                               </div> */}

 
                    </div>
         
}

function ExportElem(props)
{
            
            let [showDesc,setShowDesc] = useState(false)
              return    <>

                              <div
                                    className={` h-[350px]`}
                              >
                                          <div
                                          onMouseOver={()=>{setShowDesc(true); }} 
                                          onMouseOut={()=>{setShowDesc(false); }} 
                                                className={`w-full h-full `}
                                          >
                                                      <div 
                                                      
                                                      className={`w-full h-full relative overflow-hidden `}>
                                                            <div
                                                            
                                                            className={`w-full h-full absolute bg-[#17234dbf]
                                                                           ${showDesc? 'bottom-[0]' : 'bottom-[-100%]'}
                                                                           transition-[bottom] duration-[500ms]
                                                                           flex justify-between flex-col`}
                                                            >
                                                                  
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
                                                            <img className={`w-full h-full`} src={props.imglink} ></img>
                                                      </div>
                                          </div>
                                          
                              </div>
                              
                              

                        </>


                  
}