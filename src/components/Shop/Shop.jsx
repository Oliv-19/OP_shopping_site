import { useContext } from "react";
import Nav from "../Nav/Nav";
import styles from './Shop.module.css'
import { CartContext } from "../Contexts";

function Card(){
    const {setCart} = useContext(CartContext)
    const addToCart=()=>{
        setCart(prev=> [...prev, {name:'new'}])
        
    }

    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src={null} alt="" className={styles.img}/>
                <button onClick={addToCart} className={styles.addToCart}>Add</button>
            </div>
            <div className={styles.productText}>
                <p>Lorem ipsum</p>
                <p>$10</p>
                <div className={styles.colors}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default function Shop(){
    return (
        <div>
            <div>
                {<Card/>}
            </div>
        </div>
    )
}