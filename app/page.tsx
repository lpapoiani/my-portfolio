'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import FadeText from "./Components/FadeText/FadeText";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
          <div className={styles.content}>
              <div className={`${styles.container} ${styles.box}` }>
                  <div className={styles.luka2}>
                    <div>
                      P<span>A</span>POI<span>A</span>NI
                    </div>

                    <div className={styles.box_grey}>
                      LUK<span>A</span>
                    </div>

                    <div className={styles.text}>
                      <FadeText/>                 
                    </div>
                  </div>
              </div>

              <div className={styles.container}>
                    <Image id={styles.luka3} src="/luka.png" width={370} height={660} alt="my image"/>
              </div>
          </div>
      </div>

      <div className={styles.page_about}>
            <div className={styles.content_about}>
                <div className={styles.box_about}>
                  <div>
                    <h1>A LITTLE <span>ABOUT</span> ME</h1>
                    <Image src="/h1.png" width={200} height={10} alt="h1 image"/>
                  </div>
                  
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia eaque nulla, dignissimos rem tempora laborum sit omnis neque provident dolores aut beatae? Magnam fugiat maiores consequuntur vel non? Eius!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum soluta autem enim earum sit ipsa voluptates deleniti aut vero sint incidunt reprehenderit, perspiciatis, quod maxime a? Voluptatem, pariatur doloribus.
                  </span>
                </div>
            </div>
      </div>
    </>
  );
}
