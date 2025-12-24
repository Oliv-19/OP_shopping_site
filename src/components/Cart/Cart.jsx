import { useContext } from "react";
import { CartContext } from "../Contexts";
import styles from './Cart.module.css'

function Product({product}){
    console.log(product);
    
    return (
        <div data-testId="cartProduct" className={styles.product}>
            <div className={styles.productInfo}>
                <div className={styles.imgWrapper}>
                    <img src={null} alt="" />
                </div>
                <p className={styles.product_title}>{product.title}</p>

            </div>
            <p>$10</p>
            <div className={styles.quantity}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <p>$10</p>
            <button>delete</button>
        </div>
    )
}

export default function Cart(){
    const {cart} = useContext(CartContext)
    return (
        <main className={styles.main}>
            <div className={styles.products}>
            
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Delete</p>
                
                {cart.length > 0 ? (
                    <>
                        {cart.map(product => <Product key={product.id} product= {product}/>)}
                    </>
                ) : (
                    <>
                        <h1>No products saved to cart</h1>
                    </>
                )

                }
            </div>
            <div>

            </div>
        </main>
    )
}