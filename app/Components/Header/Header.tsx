'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faBarsStaggered,  faEnvelope, faPenToSquare, faHandHoldingHand } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

  const toggleExpand = () => {
    setShowMenu(!showMenu);
  };

    return(
        <div className={styles.header}>
       
            <button 
                className={styles.box} 
                onClick={toggleExpand}
            >
                <FontAwesomeIcon icon={faBarsStaggered}/>
            </button>
  
            <div
                className={styles.container}
                style={{
                    top: showMenu ? "0" : "30px",
                    left: showMenu? "0" : "30px",
                    width: showMenu? "100vw" : "30px",
                    height: showMenu ? "124px" : "30px",
                    opacity: showMenu ? 1 : 0,
            }}>

                <div className={styles.menu}>
                        <Link className={styles.link} href='/'><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon><div>HOME</div></Link> 
                        <Link className={styles.link} href='/Service'><FontAwesomeIcon icon={faHandHoldingHand} /><div>SERVICE</div></Link>
                        <Link className={styles.link} href='/Blog'><FontAwesomeIcon icon={faPenToSquare} /><div>BLOG</div></Link>
                        <Link className={styles.link} href='/Contact'><FontAwesomeIcon icon={faEnvelope} /><div>CONTACT</div></Link>
                </div>

            </div>

      </div>
    )
}
