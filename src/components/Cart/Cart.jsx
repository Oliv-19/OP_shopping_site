import { useContext } from "react";
import { CartContext } from "../Contexts";
import styles from './Cart.module.css'
import { Icon } from "../Shop/Shop";

function Product({product, removeFromCart, decrementQuantity, incrementQuantity, totalPerProduct}){
    return (
        <div data-testid="cartProduct" className={styles.product}>
            <div className={styles.productInfo}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={product.product.images[0]} alt="" />
                </div>
                <p className={styles.product_title} title={product.product.title}>{product.product.title}</p>

            </div>
            <p>{`$${product.product.price}`}</p>
            <div className={styles.quantity}>
                <button onClick={()=> decrementQuantity(product.product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={()=> incrementQuantity(product.product.id)}>+</button>
            </div>
            <p data-testid='totalPerProduct'>{`$${totalPerProduct(product.product.id).toFixed(2) }`}</p>
            <button data-testid="deleteBtn" className={styles.removeFromCart} onClick={() => removeFromCart(product.product.id)} >
                <Icon title='removeFromCart' />
            </button>
        </div>
    )
}

export default function Cart(){
    const {
        cart, 
        removeFromCart, 
        incrementQuantity, 
        decrementQuantity,
        total,
        totalPerProduct
    } = useContext(CartContext)
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
                        {cart.map(product => <Product key={product.product.id} product= {product} removeFromCart= {removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} totalPerProduct={totalPerProduct}/>)}
                    </>
                ) : (
                    <>
                        <h1>No products saved to cart</h1>
                    </>
                )

                }
            </div>
            <div className={styles.checkout}>
                <h1>Order</h1>
                <p>SUBTOTAL</p>
                <p>{`$${total.toFixed(2)}`}</p>
                <p>DISCOUNT</p>
                <p>$0</p>
                <p>SHIPPING</p>
                <p>FREE</p>
                <div className={styles.totalBox}>
                    <p>TOTAL</p>
                    <p>{`$${total.toFixed(2)}`}</p>
                </div>
                <button data-testid='checkout' className={styles.checkoutBtn}>Checkout Now <Icon title='cart'></Icon></button>
            </div>
        </main>
    )
}