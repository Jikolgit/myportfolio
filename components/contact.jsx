import styles from '@/styles/contact.module.css'
import Link from 'next/link'

export function Contact()
{
     
        return      <div className={styles.contactContainer}>
                               <div className={styles.title}>Contact</div>
                               <div className={styles.content}>
                                      <div className={styles.content_1}>
                                            Animation ici
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