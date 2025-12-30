import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'
import { CartContext, LoadingContext, ProductContext } from './Contexts'
import { useCart } from './hooks'


function App() {
  const cart = useCart()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data)
          setIsLoading(false)
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setIsLoading(false)
          
        })
    },[])
  return (
    <>
      <LoadingContext value={isLoading}>
        <ProductContext value={products}>
          <CartContext value={cart}>
            <Nav />
              <Outlet />
          </CartContext>
        </ProductContext>
      </LoadingContext>
    </>
  )
}

export default App
