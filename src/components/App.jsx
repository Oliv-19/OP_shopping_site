import { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'
import { CartContext } from './Contexts'

function App() {
  const [cart, setCart] = useState([])

  console.log(cart)

  return (
    <>
      <Nav />
      <main>
        <CartContext value= {setCart}>
          <Outlet />
        </CartContext>

      </main>
    </>
  )
}

export default App
