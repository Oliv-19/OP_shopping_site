import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'
import { CartContext, ProductContext } from './Contexts'
import { useCart } from './hooks'


function App() {
  const cart = useCart()
  const [products, setProducts] = useState([])
  useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => error)
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
