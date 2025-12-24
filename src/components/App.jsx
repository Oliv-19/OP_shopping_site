import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'
import { CartContext, ProductContext } from './Contexts'

export const useCart = () =>{
  const [cart, setCart] = useState([])
  const addToCart=(product)=>{
        setCart(prev=> [...prev, product])
    }
    const removeFromCart=(product)=>{
        setCart(prev=> prev?.filter((p)=> p.id != product.id ))
    }
  return {cart, addToCart, removeFromCart}
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
