import Nav from "../Nav/Nav";
import styles from './Shop.module.css'

function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src={null} alt="" className={styles.img}/>
                <button className={styles.addToCart}>Add</button>
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