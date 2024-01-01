import styles from '@/styles/contact.module.css'
import Link from 'next/link'
import { SkillElem } from './aboutme'

export function Contact()
{
     
        return      <div id="anchor_3" className={styles.contactContainer}>
                               <div className={styles.title}>Contact 📞</div>
                               <div className={styles.content}>
                                      <div className={styles.content_1}>
                                           <p>Vous pouvez me contacter par Whatsapp, Email pour tous vos besoins ou assisstance sur projet web 💪</p> 
                                                <div className={styles.content_text_2}>
                                                        <span className={styles.content_text_special} >Email :</span> zbio234@gmail.com
                                                </div>
                                                <div className={styles.content_text_3}>
                                                        <span className={styles.content_text_special}>Résidence :</span> Cotonou | Benin
                                                </div> 
                                                <div className={styles.content_text_4}>
                                                        {/* <span className={styles.content_text_special}>Tél :</span> +229 90 39 73 97 */}
                                                        <SkillElem imglink={'logowhat.png'} desc={'WhatsApp'} link={true} linkUrl={"https://wa.me/22990397397"} />
                                                        {/* <SkillElem imglink={'logo-mail.png'} desc={'Email'} link ={true} /> */}

                                                </div> 
                                      </div>
                                      <div className={styles.content_2}>
                                            <div className={styles.content_2_input_container}>
                                                    <input className={styles.content_2_input} type='text' placeholder='Nom'></input>
                                            </div>
                                            <div className={styles.content_2_input_container}>
                                                    <input className={styles.content_2_input} type='email' placeholder='Email'></input> 

                                            </div >
                                            <div className={styles.content_2_input_container}>
                                                    <textarea className={styles.content_2_textarea}   rows={7} placeholder='Nom'></textarea>
                                            </div>
                                            <div className={styles.content_2_sendButton}>Envoyer</div>
                                      </div>
                               </div>

                    </div>
         
}