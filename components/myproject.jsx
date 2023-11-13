import styles from '@/styles/myproject.module.css'
import Link from 'next/link'

export function MyProject()
{
     
        return      <div className={styles.myProjectContainer}>
                               <div className={styles.title}>Mes projets</div>
                               <div className={styles.content}>
                                     <div className={`${styles.content_elem} ${styles.content_elem_1}`}></div>
                                     <div className={styles.content_elem}></div>
                                     <div className={styles.content_elem}></div>
                                     <div className={styles.content_elem}></div>

                               </div>


                    </div>
         
}