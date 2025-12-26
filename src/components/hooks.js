import {useEffect, useState } from 'react'

export const useCart = () =>{
  const [cart, setCart] = useState([])

  
  const totalPerProduct = (id) =>{
    const product = cart.find(p => p.product.id == id)
    return Number(product.product.price) * product.quantity
  }
  
  let total = cart.length < 1 ? 0
  : cart.reduce((prev, curr)=> 
    prev + totalPerProduct(curr.product.id), 0) 

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
  return {
    cart, 
    total,
    totalPerProduct,
    addToCart, 
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity
  }
}

export const useWindowScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};