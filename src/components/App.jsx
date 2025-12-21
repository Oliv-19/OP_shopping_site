import { useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav/Nav'

function App({path}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Outlet/>
    </>
  )
}

export default App
