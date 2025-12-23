import { useContext} from "react";
import Nav from "../Nav/Nav";
import styles from './Shop.module.css'
import { CartContext, ProductContext } from "../Contexts";

function Card({product}){
    const {setCart} = useContext(CartContext)

    const addToCart=()=>{
        setCart(prev=> [...prev, {name:'new'}])
        
    }


    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src={product.image} alt="" className={styles.img}/>
            </div>
            <div className={styles.productText}>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <button onClick={addToCart} className={styles.addToCart}>Add</button>
            </div>
        </div>
    )
}

export default function Shop(){
    const products = useContext(ProductContext)
    return (
       <main className={styles.main}>
            <div className={styles.shop}>
                {products && 
                products.map(p => <Card key={p.title} product={p} />)}
            </div>
        </main>
        
    )
}