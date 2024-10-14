import styles from '@/styles/contact.module.css'
import Link from 'next/link'
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { SkillElem } from './aboutme'
import { indexContext } from '@/pages/index.tsx';
import { contacttext } from './text';
export function Contact()
{
        let valContext = useContext(indexContext);
        let langSrc = useRef(contacttext.EN);
        
        if(valContext.lang == 'EN')
           {
                   
                   langSrc.current = contacttext.EN;
           }
           else
           {
                   langSrc.current = contacttext.FR;
           }
        return      <div id="anchor_3" className={styles.contactContainer}>
                               <div className={styles.title}>Contact 📞</div>
                               <div className={styles.content}>
                                      <div className={styles.content_1}>
                                           <p>{langSrc.current.txt_1}</p> 
                                                <div className={styles.content_text_2}>
                                                        <span className={styles.content_text_special} >Email :</span> zbio234@gmail.com
                                                </div>
                                                <div className={styles.content_text_3}>
                                                        <span className={styles.content_text_special}>Résidence :</span> Cotonou | Benin
                                                </div> 
                                                <div className={styles.content_text_4}>
                                                        {/* <span className={styles.content_text_special}>Tél :</span> +229 90 39 73 97 */}
                                                        {/* <SkillElem imglink={'logowhat.png'} desc={'WhatsApp'} link={true} linkUrl={"https://wa.me/22990397397"} />
                                                        <SkillElem imglink={'logo_linkedin.png'} desc={'LinkedIn'} link={true} linkUrl={"https://www.linkedin.com/in/abdel-z-bio-474582123/"} /> */}
                                                        {/* <SkillElem imglink={'logo-mail.png'} desc={'Email'} link ={true} /> */}
                                                       
                                                        <ContactButton linkUrl={"https://t.me/AbdelBio"}>
                                                                <svg className='mx-auto' width={35} height={35} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20.71 3.655s1.942-.758 1.78 1.082c-.053.757-.54 3.408-.917 6.276l-1.295 8.495s-.108 1.244-1.08 1.46c-.97.217-2.428-.757-2.698-.973-.215-.162-4.047-2.597-5.396-3.788-.377-.324-.81-.974.054-1.731l5.666-5.41c.648-.65 1.295-2.165-1.403-.325l-7.554 5.14s-.864.54-2.483.054l-3.507-1.082s-1.295-.812.917-1.623C8.19 8.685 14.828 6.09 20.71 3.654Z" />
                                                                </svg>
                                                        </ContactButton>
                                                        <ContactButton linkUrl={"https://www.linkedin.com/in/abdel-z-bio-474582123/"}>
                                                                <svg className='mx-auto' width={35} height={35} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z" />
                                                                </svg>
                                                        </ContactButton>
                                                </div> 
                                      </div>
                                      {/* <div className={styles.content_2}>
                                            <div className={styles.content_2_input_container}>
                                                    <input className={styles.content_2_input} type='text' placeholder='Nom'></input>
                                            </div>
                                            <div className={styles.content_2_input_container}>
                                                    <input className={styles.content_2_input} type='email' placeholder='Email'></input> 

                                            </div >
                                            <div className={styles.content_2_input_container}>
                                                    <textarea className={styles.content_2_textarea}   rows={7} placeholder='Message'></textarea>
                                            </div>
                                            <div className={styles.content_2_sendButton}>Envoyer</div>
                                      </div> */}
                               </div>

                    </div>
         
}

function ContactButton(props)
{
        const [EnterElem,setEnterElem] = useState(false)
        let enterAnime = ()=>
            {
                setEnterElem(true)
            }
        let leaveAnime = ()=>
            {
                setEnterElem(false)
            }
        return(
                <a onMouseEnter={enterAnime} href={props.linkUrl} target='_blank' onMouseLeave={leaveAnime} className="relative mr-[30px] w-[120px] h-[40px] bg-white border-[1px] border-black/50 flex flex-col justify-center ">
                        <svg className={`${EnterElem? 'scale-0':'scale-100'} transition-scale duration-[500ms] absolute left-[-10px] top-[-10px] z-[2]`} width={20} height={20} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                        </svg>
                        <svg className={`${EnterElem? 'scale-100':'scale-0'} transition-scale duration-[500ms] absolute left-[-10px] bottom-[-10px] z-[2]`} width={20} height={20} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                        </svg>
                        <svg className={`${EnterElem? 'scale-100':'scale-0'} transition-scale duration-[500ms] absolute right-[-10px] top-[-10px] z-[2]`} width={20} height={20} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                        </svg>
                        <svg className={`${EnterElem? 'scale-0':'scale-100'} transition-scale duration-[500ms] absolute right-[-10px] bottom-[-10px] z-[2]`} width={20} height={20} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                        </svg>
                        {props.children}
                </a>
        )
}