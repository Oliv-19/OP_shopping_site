import { useContext } from "react";
import { CartContext } from "../Contexts";
import styles from './Cart.module.css'
import { Icon } from "../Shop/Shop";

function Product({product, removeFromCart}){
    return (
        <div data-testid="cartProduct" className={styles.product}>
            <div className={styles.productInfo}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={product.image} alt="" />
                </div>
                <p className={styles.product_title} title={product.title}>{product.title}</p>

            </div>
            <p>{`$${product.price}`}</p>
            <div className={styles.quantity}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <p>{`$${product.price}`}</p>
            <button data-testid="deleteBtn" className={styles.removeFromCart} onClick={() => removeFromCart(product)} >
                <Icon title='removeFromCart' />
            </button>
        </div>
    )
}

export default function Cart(){
    const cart = useContext(CartContext)
    return (
        <main className={styles.main}>
            <div className={styles.products}>
            
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Delete</p>
                
                {cart.cart.length > 0 ? (
                    <>
                        {cart.cart.map(product => <Product key={product.id} product= {product} removeFromCart= {cart.removeFromCart}/>)}
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