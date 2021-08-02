import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import styles2 from '../styles/Home.module.css'


export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return <> 
            <header className={styles2.header}>
                <nav className={styles.navbar}>
                    <Link href='/'>
                     <a className={styles.navlogo}> <Image src="/city-digital-2.png" alt="City Digital"  width={100} height={50}/> </a>
                    </Link>
                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                       <Link href='/'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/quemsomos'>
                          <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Quem Somos</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/portfolio'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Portfolio</a>
                        </Link>
                    </li>

                    <li className={styles.navitem}>
                        <Link href='/servicos'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Serviços</a>
                        </Link>
                    </li>


                    <li className={styles.navitem}>
                        <Link href='/contact'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Contact</a>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
            </header>
        {children}
        {/* {footer} */}
        <div className={styles2.footer}>
            <footer className={styles.footer}>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            2021 | Desenvolvido por {' '} 
            <Image src="/city-digital.png" alt="City Digital" width={100} height={50} />
            </a>
        </footer>
      </div>
     </>
}