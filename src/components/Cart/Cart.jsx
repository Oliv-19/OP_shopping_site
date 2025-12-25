import { useContext, useState } from "react";
import { CartContext } from "../Contexts";
import styles from './Cart.module.css'
import { Icon } from "../Shop/Shop";

function Product({product, removeFromCart, decrementQuantity, incrementQuantity}){
    console.log(product)
    return (
        <div data-testid="cartProduct" className={styles.product}>
            <div className={styles.productInfo}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={product.product.image} alt="" />
                </div>
                <p className={styles.product_title} title={product.product.title}>{product.product.title}</p>

            </div>
            <p>{`$${product.product.price}`}</p>
            <div className={styles.quantity}>
                <button onClick={()=> decrementQuantity(product.product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={()=> incrementQuantity(product.product.id)}>+</button>
            </div>
            <p>{`$${product.product.price}`}</p>
            <button data-testid="deleteBtn" className={styles.removeFromCart} onClick={() => removeFromCart(product.product.id)} >
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
                        {cart.cart.map(product => <Product key={product.product.id} product= {product} removeFromCart= {cart.removeFromCart} incrementQuantity={cart.incrementQuantity} decrementQuantity={cart.decrementQuantity}/>)}
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