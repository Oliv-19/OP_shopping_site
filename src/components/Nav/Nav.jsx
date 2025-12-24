import { Link, useLocation } from "react-router"
import styles from './Nav.module.css'
import '../style.css'
import { useState } from "react"

export default function Nav(){
    const {pathname} = useLocation()

    return (
        <nav>
            <h1>Shopping site</h1>
            <Link to='/' className={`${styles.link} ${pathname === '/' && styles.active} `}>Home</Link>
            <Link data-testid = "shop" to='/shop' className={`${styles.link} ${pathname === '/shop' && styles.active} `}>Shop</Link>
            <Link to='/contactUs' className={`${styles.link} ${pathname === '/contactUs' && styles.active}`}>Contact us</Link>
            <Link data-testid = "cart"  to='/cart' className={`${styles.link} ${pathname === '/cart' && styles.active}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M25.18 10.73a3 3 0 0 0-3-2.73H22a6 6 0 0 0-12 0h-.16a3 3 0 0 0-3 2.73L5.23 26.67a3 3 0 0 0 3 3.33h15.53a3 3 0 0 0 3-3.33zm-.66 16.93a1 1 0 0 1-.76.34H8.24a1 1 0 0 1-.76-.34 1 1 0 0 1-.26-.79l1.59-15.94a1 1 0 0 1 1-.93H10v2a1 1 0 0 0 2 0v-2h5a1 1 0 0 0 0-2h-5a4 4 0 0 1 8 0v4a1 1 0 0 0 2 0v-2h.16a1 1 0 0 1 1 .93l1.59 15.94a1 1 0 0 1-.23.79z" data-name="shopping bag"/>
                </svg>
            </Link>
        </nav>
    )
}