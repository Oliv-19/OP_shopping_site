import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'
import { CartContext, ProductContext } from './Contexts'

export const useCart = () =>{
  const [cart, setCart] = useState([])
  const addToCart=(product)=>{
    setCart(prev=> [...prev, {product, quantity: 1}])
  }
  const removeFromCart=(id)=>{
    setCart(prev=> prev?.filter((p)=> p.product.id != id ))
  }
  const incrementQuantity= (id)=>{
    setCart(prev => prev.map(p => p.product.id == id ? {product:{...p.product}, quantity: p.quantity+1 }: p))
  }
  const decrementQuantity= (id)=>{
    setCart(prev => prev.map(p => p.product.id == id ? (p.quantity > 1 ? {product:{...p.product}, quantity: p.quantity-1 } : p) : p))
  }
  return {cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity}
}

function App() {
  const cart = useCart()
  const [products, setProducts] = useState([])
  useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

  return (
    <>
      <ProductContext value={products}>
        <CartContext value={cart}>
          <Nav />
            <Outlet />
        </CartContext>
      </ProductContext>
    </>
  )
}

export default App
