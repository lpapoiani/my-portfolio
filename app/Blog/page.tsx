'use client'

import Image from 'next/image'
import styles from './page.module.scss'


export default function Blog () {
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                
                <div className={styles.title}>
                    <h1>M Y <span>L I T T L E</span> B L O G</h1>
                    <Image src="/h1.png" width={250} height={10} alt="h1 image"/>
                </div>

                <div className={styles.content}>
                    <div className={styles.box}>
                        <div className={styles.box_image1}>

                        </div>
                        <h1>CREATIVE MINDS</h1>
                        <span>_________</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor saepe, maxime cupiditate reprehenderit repudiandae doloribus iusto ullam consequatur voluptas, a natus minima pariatur praesentium, animi id ex vel repellat officia.</p>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.box_image2}>

                        </div>
                        <h1>CREATIVE MINDS</h1>
                        <span>_________</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi totam dolorem laboriosam velit minima temporibus facilis architecto officia repudiandae asperiores inventore, maiores alias culpa dignissimos repellendus eveniet voluptas eligendi fugit?</p>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.box_image3}>

                        </div>
                        <h1>CREATIVE MINDS</h1>
                        <span>_________</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto tempora a architecto aliquid ex ipsa cumque? Labore omnis fugit vitae! Accusamus nam consequuntur sunt impedit perferendis neque asperiores error dolor.</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}