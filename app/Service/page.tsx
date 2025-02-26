'use client'

import styles from './page.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera, faCubes, faDesktop, } from '@fortawesome/free-solid-svg-icons'

export default () => {
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h4>I &nbsp; &nbsp;D O &nbsp;&nbsp;A M A Z I N G&nbsp; &nbsp;T H I N G S &nbsp; &nbsp;F O R  &nbsp; &nbsp;C L I E N T S</h4>
                    <Image src="/h1.png" width={200} height={10} alt="h4 image"/>
                </div>

                <div className={styles.content}>
                    <div className={styles.box}>
                        <div className={styles.box_image}>
                            <FontAwesomeIcon icon={faCamera}/>
                        </div>
                        <h3>POTOGRAPHER</h3>
                        <span>_________</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor saepe, maxime cupiditate reprehenderit repudiandae doloribus iusto ullam consequatur voluptas, a natus minima pariatur praesentium, animi id ex vel repellat officia.</p>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.box_image}>
                            <FontAwesomeIcon icon={faDesktop}/>
                        </div>
                        <h3>WEB DESIGNER</h3>
                        <span>_________</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi totam dolorem laboriosam velit minima temporibus facilis architecto officia repudiandae asperiores inventore, maiores alias culpa dignissimos repellendus eveniet voluptas eligendi fugit?</p>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.box_image}>
                            <FontAwesomeIcon icon={faCubes}/>
                        </div>
                        <h3>3D ARTIST</h3>
                        <span>_________</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto tempora a architecto aliquid ex ipsa cumque? Labore omnis fugit vitae! Accusamus nam consequuntur sunt impedit perferendis neque asperiores error dolor.</p>
                    </div>
                 </div> 

            </div>

            <div className={styles.info_service}>
               <div className={styles.service_image}></div>

               <div>
                    <h4>HIGH &nbsp;QUALITY &nbsp;WEBDESIGN</h4>
                    <span>_______</span>
                    <p> Veritatis blanditiis provident consequatur iure impedit reiciendis voluptatibus nemo nisi quo placeat illo qui laboriosam, odit doloribus sint sequi officia beatae assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed distinctio inventore ex consectetur, veritatis saepe temporibus modi, et libero accusantium nihil est maiores. Saepe esse tempora animi facilis. Magni?</p>
                    <button>READ MORE</button>
               </div>
               <div id={styles.info_whiteBackground}>
                    <h4>PROFESSIONAL &nbsp;PHOTOGRAPHY</h4>
                    <span>_______</span>
                    <p> Magnam quibusdam sit, ipsa autem eum est quo vel culpa sed repellat rem doloremque alias et nulla harum suscipit, accusantium ex laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nam? Odit non ea fuga voluptate autem laudantium optio libero fugiat. Eaque sapiente architecto inventore quasi nemo, dolorum debitis. Eius, nihil!</p>
                    <button>READ MORE</button>
                </div>

               <div className={styles.service_image2}></div>
               <div className={styles.service_image3}></div>

               <div>
                    <h4>3D &nbsp;MOELING &nbsp;AND &nbsp;ANIMATIONS</h4>
                    <span>_______</span>
                    <p> Vel veniam aut eius ipsam ipsa quos magni vero, distinctio quod, perferendis, dicta nihil nostrum sit. Adipisci neque amet quaerat. Distinctio, velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ea beatae blanditiis sint quos, voluptatum ullam eveniet nihil explicabo? Quidem delectus tempore voluptatem, similique quasi error? Quo, fuga! Sint?</p>
                    <button>READ MORE</button>
               </div>
            </div>
        </div>
    )
}