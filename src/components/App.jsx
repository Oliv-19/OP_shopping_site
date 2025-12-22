import { useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'
import { CartContext } from './Contexts'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <CartContext value={{cart, setCart}}>
        <Nav />
        <main>
          <Outlet />
        </main>
      </CartContext>
    </>
  )
}

export default App
