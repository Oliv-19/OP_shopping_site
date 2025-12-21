import { Link } from "react-router"
import styles from './Nav.module.css'
import '../style.css'
import { useState } from "react"

export default function Nav(){
    //const [isActive, setIsActive]= useState()

    return (
        <nav>
            <h1>Shopping site</h1>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/shop' className={styles.link}>Shop</Link>
            <Link to='/contactUs' className={styles.link}>Contact us</Link>
            <Link to='/cart' className={`${styles.link} ${styles.cartBtn}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3b2a40">
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
                </svg>
            </Link>
        </nav>
    )
}