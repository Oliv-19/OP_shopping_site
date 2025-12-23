import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'
import { CartContext, ProductContext } from './Contexts'

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

  return (
    <>
      <ProductContext value={products}>
        <CartContext value={{cart, setCart}}>
          <Nav />
            <Outlet />
        </CartContext>
      </ProductContext>
    </>
  )
}

export default App
