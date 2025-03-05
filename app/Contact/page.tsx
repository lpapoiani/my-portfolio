'use client'

import styles from './page.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarker, faMobile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faDeviantart, faDribbble, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Contact () {
    return(
        <div className={styles.page}>
            <div className={styles.container}>

                <div className={styles.title}>
                    <h1>D R O P <span>&nbsp; M E &nbsp;</span> A &nbsp; L I N E</h1>
                    <Image src="/h1.png" width={250} height={10} alt="h1 image"/>
                </div>
                
                <div className={styles.contact}>
                    <div>
                        <FontAwesomeIcon icon={faMapMarker}/>
                        <h3>ADDRESS</h3>
                        <span>________</span>
                        <span>100 ipsum street, tbilisi</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faMobile}/>
                        <h3>PHONE</h3>
                        <span>________</span>
                        <span>+995 557 91 91 30</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faPaperPlane}/>
                        <h3>EMAIL</h3>
                        <span>________</span>
                        <span>lpapoiani28@gmail.com</span>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.contact_picture}></div>

                    <div className={styles.box_input}>
                        <div>
                            <input type='text' placeholder='Your name'/>
                            <input type="email" placeholder='Email adress'/>
                        </div>

                        
                        <textarea placeholder='Write you message here...'></textarea>
                    </div>
                </div>

                <div className={styles.send_button}>
                    <button>Send message</button>
                </div>

                <div className={styles.icon}>
                        <FontAwesomeIcon className={styles.icon_social} icon={faDribbble}/>
                        <FontAwesomeIcon className={styles.icon_social} icon={faTwitter}/>
                        <FontAwesomeIcon className={styles.icon_social} icon={faFacebook}/>
                        <FontAwesomeIcon className={styles.icon_social} icon={faDeviantart}/>
                        <FontAwesomeIcon className={styles.icon_social} icon={faYoutube}/>
                </div>
            </div>
        </div>
    )
}