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
                                    <ExportElem title={"Neo Market"} desc={langSrc.current.txt_1} tools={['REACT','NEXT','TAIL']} 
                                    sitelink={'https://nmarket-online.vercel.app/'}
                                     imglink={'c1_4.png'} />
                                     <ExportElem title={"Le musée du Web"} desc={langSrc.current.txt_2} tools={['REACT','NEXT','TAIL','FIREB','THREE']} 
                                     imglink={'c1_2.jpeg'} sitelink={'https://museedu229.vercel.app/'} />
                                     <ExportElem title={"Chop Master"} desc={langSrc.current.txt_3} tools={['REACT','THREE','TAIL']} 
                                     imglink={'c1_3.png'} sitelink={'https://chopr3f.vercel.app/'} />
                                     <ExportElem title={"Excavation"} desc={langSrc.current.txt_4} tools={['REACT','THREE','TAIL']} 
                                     imglink={'excavationCover.png'} sitelink={'https://excavation.vercel.app/'} />
                                     <ExportElem title={"Stick Jump"} desc={langSrc.current.txt_5} tools={['REACT','THREE','TAIL']} 
                                     imglink={'stickjumpCover.png'} sitelink={'https://stickjumpr3f.vercel.app/'} />
                                     <ExportElem title={"Dahomey Warrior"} desc={langSrc.current.txt_6} tools={['REACT','THREE','TAIL']} 
                                     imglink={'dwarriorCover.png'} sitelink={'https://dwarriorr3f.vercel.app/'} />
                                     <ExportElem title={"BavardApp"} desc={langSrc.current.txt_7} tools={['REACT','TAIL','FIREB']}
                                     imglink={'bavardAppCover.png'} sitelink={'https://bavardapp.vercel.app/'} />
                                    
                                    

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
            let toolElem = null;
            let _indexContext = useContext(indexContext);
            let [showDesc,setShowDesc] = useState(false);
            const [EnterElem,setEnterElem] = useState(false)
            let enterAnime = ()=>
                {
                    setEnterElem(true)
                }
            let leaveAnime = ()=>
                {
                    setEnterElem(false)
                }
            let showDescVue = ()=>
                {
                  _indexContext.descriptionObj.current.coverSrc = props.imglink;
                  _indexContext.descriptionObj.current.title = props.title;
                  _indexContext.descriptionObj.current.desc = props.desc;
                  _indexContext.descriptionObj.current.siteLink = props.sitelink;
                  _indexContext.descriptionObj.current.tools = [];


                  for(let i =0; i<props.tools.length;i++)
                  {
                        if(props.tools[i] =='REACT')
                        {
                              toolElem=   <div key={i} className="relative w-[60px] h-[60px] inline-block ">
                                                      <svg className='absolute left-0 right-0 top-0 bottom-0 m-auto' width={45} height={45} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.25 8.471a16.35 16.35 0 0 0-.724-.228c.04-.165.077-.33.111-.495.549-2.668.19-4.816-1.034-5.524-1.172-.678-3.094.029-5.033 1.72-.19.167-.377.339-.56.516a10.989 10.989 0 0 0-.375-.345c-2.032-1.809-4.068-2.57-5.29-1.86-1.173.68-1.521 2.7-1.027 5.227.049.25.104.5.166.747-.288.082-.567.17-.833.262C2.27 9.323.75 10.628.75 11.981c0 1.398 1.633 2.8 4.114 3.65.201.067.405.131.61.19a13.96 13.96 0 0 0-.177.805c-.469 2.484-.103 4.456 1.066 5.132 1.208.698 3.235-.02 5.21-1.749.156-.137.313-.281.469-.433.197.19.4.376.61.555 1.912 1.65 3.8 2.316 4.968 1.638 1.207-.7 1.6-2.82 1.09-5.397-.04-.197-.084-.398-.135-.603.142-.042.282-.085.418-.13 2.578-.857 4.258-2.242 4.258-3.657-.001-1.36-1.571-2.672-4.001-3.51Zm-6.047-3.8c1.66-1.45 3.213-2.021 3.92-1.612.754.435 1.047 2.191.574 4.494-.031.15-.065.3-.101.449a22.866 22.866 0 0 0-3.009-.477 22.557 22.557 0 0 0-1.902-2.379c.168-.163.34-.321.517-.475Zm-5.81 8.466a28.373 28.373 0 0 0 1.345 2.325 20.406 20.406 0 0 1-2.074-.334 21.53 21.53 0 0 1 .73-1.991Zm0-2.266c-.28-.665-.519-1.32-.714-1.951a21.6 21.6 0 0 1 2.04-.35 27.81 27.81 0 0 0-1.327 2.301h.002Zm.512 1.133a27.347 27.347 0 0 1 2.048-3.558 27.226 27.226 0 0 1 4.101 0c.382.566.743 1.144 1.084 1.735.341.59.665 1.194.97 1.81-.301.62-.624 1.228-.967 1.825-.341.593-.7 1.175-1.079 1.745-.667.047-1.359.073-2.062.073-.703 0-1.381-.022-2.037-.065a27.26 27.26 0 0 1-2.06-3.565h.002Zm8.068 2.293c.226-.393.444-.792.652-1.195.286.648.538 1.31.756 1.984-.693.156-1.394.276-2.1.358.238-.377.469-.76.692-1.147Zm.643-3.425a31.326 31.326 0 0 0-.648-1.172c-.218-.38-.446-.757-.684-1.128.718.091 1.407.212 2.052.36a20.612 20.612 0 0 1-.72 1.94ZM12.01 5.835c.468.512.91 1.046 1.324 1.602a27.967 27.967 0 0 0-2.66 0 21.25 21.25 0 0 1 1.336-1.602ZM6.828 3.087C7.58 2.65 9.245 3.275 11 4.834c.112.1.225.205.337.313-.69.749-1.33 1.543-1.915 2.377-1.01.091-2.013.248-3.003.469-.057-.23-.109-.462-.155-.695-.424-2.167-.143-3.8.564-4.21ZM5.73 14.893a11.199 11.199 0 0 1-.555-.174c-1.097-.375-2.003-.865-2.625-1.397-.557-.478-.84-.955-.84-1.341 0-.82 1.223-1.868 3.26-2.578.256-.09.514-.17.774-.245.303.973.669 1.924 1.097 2.848a23.548 23.548 0 0 0-1.11 2.887Zm5.21 4.39c-.874.765-1.748 1.308-2.52 1.581-.692.245-1.244.252-1.577.06-.71-.41-1.005-1.994-.603-4.119.048-.25.103-.5.165-.75 1 .216 2.012.363 3.032.44a23.44 23.44 0 0 0 1.931 2.391c-.14.137-.283.27-.428.398Zm1.098-1.088a21.601 21.601 0 0 1-1.354-1.624 33.598 33.598 0 0 0 2.675-.004 20.6 20.6 0 0 1-1.322 1.628Zm5.836 1.34c-.134.724-.403 1.207-.736 1.4-.71.412-2.226-.123-3.861-1.534a15.464 15.464 0 0 1-.566-.515 22.714 22.714 0 0 0 1.886-2.4 22.375 22.375 0 0 0 3.047-.472c.046.186.086.368.122.546.225 1.14.257 2.17.108 2.975Zm.816-4.811c-.123.04-.25.08-.378.119a22.658 22.658 0 0 0-1.14-2.857c.428-.913.794-1.854 1.096-2.815.23.067.453.137.669.212 2.082.718 3.352 1.78 3.352 2.598 0 .872-1.372 2.003-3.599 2.743Z" />
                                                            <path d="M12 13.992a2.016 2.016 0 1 0 .012-4.03 2.016 2.016 0 0 0-.013 4.03Z" />
                                                      </svg>
                                          </div>
                        }
                        else if(props.tools[i] =='TAIL')
                        {
                              toolElem=   <div key={i} className="relative w-[60px] h-[60px] inline-block ">
                                                      <svg className='absolute left-0 right-0 top-0 bottom-0 m-auto' width={45} height={45} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M11.667 6C9.177 6 7.623 7.222 7 9.667c.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 2 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6Zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 1.975 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968Z" />
                                                      </svg>
                                          </div>
                        }
                        else if(props.tools[i] =='FIREB')
                        {
                              toolElem=   <div key={i} className="relative w-[60px] h-[60px] inline-block ">
                                                      <svg className='absolute left-0 right-0 top-0 bottom-0 m-auto' width={45} height={45} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="m4.53 17.05 6.15-11.72h-.02c.38-.74 1.28-1.02 2.01-.63.26.14.48.36.62.62l1.06 2.01" />
                                                      <path d="M15.47 6.45c.58-.59 1.53-.59 2.11-.01.22.22.36.5.41.81l1.5 9.11c.1.62-.2 1.24-.76 1.54l-6.07 2.9c-.46.25-1.01.26-1.46 0l-6.02-2.92c-.55-.31-.85-.92-.75-1.54L6.39 4.3c.12-.82.89-1.38 1.7-1.25.46.07.87.36 1.09.77l1.24 1.76" />
                                                      <path d="M4.57 17.18 15.5 6.5" />
                                                      </svg>
                                          </div>
                        }
                        else if(props.tools[i] =='THREE')
                        {
                              toolElem=   <div key={i} className="relative w-[60px] h-[60px] inline-block">
                                                      <img className='w-[45px] absolute left-0 right-0 top-0 bottom-0 m-auto ' src="Three.js.svg" alt="img" />
                                          </div>
                        }
                        if(props.tools[i] =='NEXT')
                        {
                              toolElem=   <div key={i} className="relative w-[60px] h-[60px] inline-block ">
                                                      <svg className='absolute left-0 right-0 top-0 bottom-0 m-auto' width={45} height={45} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394.00000000000006 79.433">
                                                      <path d="M261.919.033h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791V.033zM149.052.033V12.7h-55.01v20.377h44.239v12.667H94.042v20.928h55.01V79.34H80.43V12.7h-.006V.033h68.628zM183.32.066h-17.814l63.806 79.306h17.866l-31.907-39.626L247.127.126l-17.815.028-22.96 28.516L183.32.066zM201.6 56.715l-8.921-11.092-27.224 33.81h17.865l18.28-22.718z" fill="var(--geist-foreground)"/>
                                                      <path clipRule="evenodd" d="M80.907 79.339L17.015 0H0v79.306h13.612V16.952l50.195 62.387h17.1z" fill="var(--geist-foreground)" fillRule="evenodd"/>
                                                      <path d="M333.607 78.855a3.528 3.528 0 0 1-2.555-1.036c-.71-.691-1.061-1.527-1.052-2.518-.009-.963.342-1.79 1.052-2.481a3.528 3.528 0 0 1 2.555-1.036c.959 0 1.798.345 2.508 1.036.72.69 1.079 1.518 1.089 2.481a3.44 3.44 0 0 1-.508 1.79 3.675 3.675 0 0 1-1.319 1.282 3.403 3.403 0 0 1-1.77.482zM356.84 45.445h6.032v23.24c-.009 2.135-.471 3.962-1.374 5.498-.913 1.536-2.177 2.708-3.8 3.535-1.614.818-3.505 1.237-5.654 1.237-1.965 0-3.726-.355-5.294-1.046-1.568-.69-2.813-1.726-3.726-3.09-.923-1.363-1.375-3.063-1.375-5.098h6.042c.009.89.212 1.663.599 2.308a3.855 3.855 0 0 0 1.605 1.481c.691.346 1.485.519 2.379.519.969 0 1.799-.2 2.472-.61.673-.4 1.19-1 1.55-1.799.35-.79.535-1.772.544-2.935v-23.24zM387.691 54.534c-.147-1.409-.793-2.509-1.918-3.29-1.135-.79-2.601-1.182-4.4-1.182-1.263 0-2.351.191-3.255.564-.904.382-1.605.89-2.085 1.536-.479.645-.719 1.381-.738 2.208 0 .691.166 1.29.489 1.79.323.51.756.937 1.319 1.282a8.806 8.806 0 0 0 1.845.882c.682.236 1.365.436 2.047.6l3.145.772a21.74 21.74 0 0 1 3.662 1.182 12.966 12.966 0 0 1 3.163 1.872 8.384 8.384 0 0 1 2.214 2.726c.544 1.064.821 2.309.821 3.745 0 1.936-.498 3.635-1.504 5.108-1.005 1.463-2.453 2.608-4.353 3.435-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.4-6.779-1.2-1.918-.79-3.413-1.954-4.492-3.48-1.079-1.527-1.66-3.39-1.743-5.58h5.977c.083 1.144.452 2.099 1.079 2.871.636.763 1.466 1.327 2.481 1.709 1.024.372 2.167.563 3.431.563 1.319 0 2.481-.2 3.486-.59.996-.391 1.78-.937 2.343-1.646.572-.7.858-1.526.867-2.472-.009-.863-.268-1.581-.766-2.145-.507-.563-1.208-1.036-2.103-1.417a21.606 21.606 0 0 0-3.154-1.027l-3.818-.964c-2.758-.7-4.944-1.763-6.54-3.19-1.604-1.427-2.398-3.317-2.398-5.69 0-1.944.535-3.653 1.615-5.116 1.069-1.463 2.536-2.6 4.39-3.408 1.863-.818 3.966-1.218 6.308-1.218 2.38 0 4.464.4 6.263 1.218 1.798.809 3.21 1.936 4.233 3.372 1.024 1.436 1.559 3.08 1.587 4.944h-5.848z" fill="var(--geist-foreground)"/>
                                                      </svg>
                                          </div>
                        }
                        _indexContext.descriptionObj.current.tools[i] = toolElem
                  }
                  
                   _indexContext.setShowDescription(true)
                }
              return    <>

                              <div
                                    className={` h-[350px]`}
                              >
                                          <div
                                          onMouseOver={()=>{setShowDesc(true); }} 
                                          onMouseOut={()=>{setShowDesc(false); }} 
                                          onMouseEnter={enterAnime} onMouseLeave={leaveAnime}
                                                className={`w-full h-full relative `}
                                          >
                                                      <svg className={`${EnterElem? 'scale-0':'scale-100'} transition-scale duration-[500ms] absolute left-[-12px] top-[-12px] z-[2]`} width={24} height={24} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 5v14" />
                                                            <path d="M5 12h14" />
                                                      </svg>
                                                      <svg className={`${EnterElem? 'scale-100':'scale-0'} transition-scale duration-[500ms] absolute left-[-12px] bottom-[-12px] z-[2]`} width={24} height={24} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 5v14" />
                                                            <path d="M5 12h14" />
                                                      </svg>
                                                      <svg className={`${EnterElem? 'scale-100':'scale-0'} transition-scale duration-[500ms] absolute right-[-12px] top-[-12px] z-[2]`} width={24} height={24} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 5v14" />
                                                            <path d="M5 12h14" />
                                                      </svg>
                                                      <svg className={`${EnterElem? 'scale-0':'scale-100'} transition-scale duration-[500ms] absolute right-[-12px] bottom-[-12px] z-[2]`} width={24} height={24} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 5v14" />
                                                            <path d="M5 12h14" />
                                                      </svg>
                                                      <div 
                                                      
                                                      className={`w-full h-full relative overflow-hidden `}>
                                                            {/* <div
                                                            
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
                                                            </div> */}
                                                            <div className="w-full h-full absolute left-[0] top-[0] bg-white/90 transition duration-[250ms] blur-none opacity-0 hover:opacity-100 
                                                                            flex flex-col justify-center border-[1px] border-black/40 px-[5px] ">
                                                                  
                                                                              
                                                                                    <p className={'text-black text-center text-[1.5rem] '}>
                                                                                          {props.title}
                                                                                    </p>
                                                                                    {/* <p className={'text-black text-center'}>
                                                                                          {props.desc}
                                                                                    </p> */}
                                                                              
                                                                             
                                                                              <div className=" mt-[30px] ">
                                                                                     <span onClick={showDescVue} className={'cursor-pointer py-[10px] px-[25px] font-bold bg-black text-white tracking-[3px] '}>Description</span>
                                                                              </div>
                                                                  
                                                            </div>
                                                            <img className={`w-full h-full`} src={props.imglink} ></img>
                                                      </div>
                                          </div>
                                          
                              </div>
                              
                              

                        </>


                  
}

export function DescriptionElem()
{
      let _indexContext = useContext(indexContext);
      let [descriptionVisible,setDEscriptionVisible] = useState(false);
      useEffect(()=>
            {     
                  setDEscriptionVisible(true);
            },[])
      return(
                  <div className={`w-full h-full fixed z-[5] left-[0] top-[0] bg-white/90 
                                   opacity-100
                         border-[1px] border-black/40 px-[5px] `}>
                              
                              <div  style={{transition:'margin 0.4s, opacity 0.5s'}} 
                                    className={`relative max-w-[500px] bg-white shadow-lg h-full ${descriptionVisible ? 'opacity-100 mt-[5px]' : 'opacity-0 mt-[-50px]'}  mx-auto px-[5px] pb-[50px] overflow-auto `}>
                                          <div className=" absolute right-[10px] top-[10px] w-[40px] h-[40px] ">
                                                      <div 
                                                            // onClick={()=>{setDEscriptionVisible(false)}} 
                                                            onClick={()=>{_indexContext.setShowDescription(false)}} 
                                                            className=" cursor-pointer
                                                                        fixed
                                                                        shadow-lg border-[1px] border-white
                                                                        rounded-full w-[40px] h-[40px] bg-black ">
                                                            <svg className='absolute left-0 right-0 top-0 bottom-0 m-auto' width={30} height={30} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 6 6 18" />
                                                            <path d="m6 6 12 12" />
                                                            </svg>
                                                      </div>
                                          </div>
                                          <div className="">
                                                <img src={_indexContext.descriptionObj.current.coverSrc} alt="cover" className="" />
                                          </div>
                                          <div className=" mt-[10px] text-[1.5rem] ">
                                                {_indexContext.descriptionObj.current.title}
                                          </div>
                                          <div className=" mt-[10px] font-bold">
                                                Outils
                                          </div>
                                          <div className="">
                                                  {_indexContext.descriptionObj.current.tools}
                                                  
                                                  
                                          </div>
                                          <div className=" mt-[10px] py-[10px]">
                                                      {_indexContext.descriptionObj.current.desc}

                                                      
                                          </div>
                                          <div className=" mt-[10px] py-[20px] ">
                                                     <a href={_indexContext.descriptionObj.current.siteLink} target='_blank' className='bg-black text-white px-[25px] py-[5px] '>VOIRE</a>
                                                      
                                          </div>

                              </div>

                  </div>
      )
}