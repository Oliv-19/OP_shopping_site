import { Link, useLocation } from "react-router"
import styles from './Nav.module.css'
import '../style.css'
import { useEffect, useRef, useState } from "react"
import { Icon } from "../Shop/Shop"
import { useWindowScrollPosition } from "../hooks"

export default function Nav(){
    const navRef = useRef(null);
    const {pathname} = useLocation()
    const scrollPosition = useWindowScrollPosition()
    scrollPosition > 100 ? navRef.current?.classList.add(styles.scrolled)
    : navRef.current?.classList.remove(styles.scrolled)
        
        

    return (
        <nav ref={navRef}>
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