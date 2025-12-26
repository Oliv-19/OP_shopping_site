import { Link, useLocation } from "react-router"
import styles from './Nav.module.css'
import '../style.css'
import { useState } from "react"
import { Icon } from "../Shop/Shop"

export default function Nav(){
    const {pathname} = useLocation()

    return (
        <nav>
            <h1>Shopping site</h1>
            <Link to='/' className={`${styles.link} ${pathname === '/' && styles.active} `}>Home</Link>
            <Link data-testid = "shop" to='/shop' className={`${styles.link} ${pathname === '/shop' && styles.active} `}>Shop</Link>
            <Link to='/contactUs' className={`${styles.link} ${pathname === '/contactUs' && styles.active}`}>Contact us</Link>
            <Link data-testid = "cart"  to='/cart' className={`${styles.link} ${pathname === '/cart' && styles.active}`}>
                <Icon title='cart'/>
            </Link>
        </nav>
    )
}