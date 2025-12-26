import {screen, render, waitFor} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import userEvent from "@testing-library/user-event";
import Cart from "../components/Cart/Cart";
import { CartContext } from "../components/Contexts";
import { useCart } from "../components/App";
import { renderRouter } from "./Nav.test";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "../components/routes";
import { useState } from "react";

describe('Cart tests', ()=>{
    const Wrapper = ({children, initialValue})=>{
        const [cart, setCart] = useState(initialValue? [{product: initialValue, quantity: 1}]: [])
        const addToCart = (item) => setCart((prev) => [...prev, {product:item, quantity: 1}]) 
        const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.product.id !== id))
        const totalPerProduct = (id) =>{
            const product = cart.find(p => p.product.id == id)
            return Number(product.product.price) * product.quantity
        }
        let total = cart.length < 1 ? 0
        : cart.reduce((prev, curr)=> 
            prev + totalPerProduct(curr.product.id), 0)  
        const incrementQuantity= (id)=>{
            setCart(prev => prev.map(p => p.product.id == id ? {product:{...p.product}, quantity: p.quantity+1 }: p))
        }
        const decrementQuantity= (id)=>{
            setCart(prev => prev.map(p => p.product.id == id ? (p.quantity > 1 ? {product:{...p.product}, quantity: p.quantity-1 } : p) : p))
        }
        return (
            <CartContext  value={{cart, addToCart, removeFromCart, total, totalPerProduct, incrementQuantity, decrementQuantity}}>
                {children}
            </CartContext>
        )
    }
    it('loads Cart item', ()=>{
        renderRouter(
            <Wrapper initialValue={{ id: 1, title: 'Test Item' }}>
                <Cart/>
            </Wrapper>
        )
        expect(screen.getByText(/test item/i)).toBeInTheDocument()
    })
    it('renders "No product saved to cart" when empty', ()=>{
        renderRouter(
            <Wrapper >
                <Cart/>
            </Wrapper>
        )
        expect(screen.getByText('No products saved to cart')).toBeInTheDocument()
    })
    it('adds item to cart when addToCart button in /shop is clicked', async()=>{
        const user = userEvent.setup()
        const router = createBrowserRouter(routes)
        render(
            <RouterProvider router = {router} />
        )

        await user.click(screen.getByTestId('shop'))
        const addBtn = await screen.findByTestId('addToCart1')
        expect(addBtn).toBeInTheDocument()
        await user.click(addBtn)
        const cartBtn =  screen.getByTestId('cart')
        await user.click(cartBtn)
        const cartProduct = await screen.findByTestId('cartProduct')
        
        expect(cartProduct).toBeInTheDocument()
        
    })
    it('remove item from cart when removeFromCart button in /shop is clicked', async()=>{
        const user = userEvent.setup()
        const router = createBrowserRouter(routes)
        render(
            <RouterProvider router = {router} />
        )

        await user.click(screen.getByTestId('shop'))
        const addBtn = await screen.findByTestId('addToCart1')
        expect(addBtn).toBeInTheDocument()
        await user.click(addBtn)
        const cartBtn =  screen.getByTestId('cart')
        await user.click(cartBtn)
        const cartProduct = await screen.findByTestId('cartProduct')

        expect(cartProduct).toBeInTheDocument()

        await user.click(screen.getByTestId('shop'))
        const removeBtn = await screen.findByTestId('removeFromCart1')
        await user.click(removeBtn)
        await user.click(cartBtn)
        
        expect(cartProduct).not.toBeInTheDocument()
        
    })
    it('removes item from cart when deleted from /cart', async()=>{
        const user = userEvent.setup()
        renderRouter(
            <Wrapper initialValue={{ id: 1, title: 'Test Item' }}>
                <Cart/>
            </Wrapper>
        )
        const productTitle = screen.getByText('Test Item')
        expect(productTitle).toBeInTheDocument()

        const deleteBtn = screen.getByTestId('deleteBtn')
        await user.click(deleteBtn)
        await waitFor(() => { 
            expect(screen.queryByText('Test Item')).not.toBeInTheDocument() 
        })
    })
    it('increments item total price', async()=>{
        const user = userEvent.setup()
        renderRouter(
            <Wrapper initialValue={{ id: 1, title: 'Test Item', price: 2 }}>
                <Cart/>
            </Wrapper>
        )
        const totalPrice = screen.getByTestId('totalPerProduct')
        expect(totalPrice.textContent).toBe('$2.00') 
        const incrementBtn = screen.getByText('+')
        await user.click(incrementBtn)
        expect(totalPrice.textContent).toBe('$4.00')
    })
    it('decrements item total price', async()=>{
        const user = userEvent.setup()
        renderRouter(
            <Wrapper initialValue={{ id: 1, title: 'Test Item', price: 2 }}>
                <Cart/>
            </Wrapper>
        )
        const totalPrice = screen.getByTestId('totalPerProduct')
        const incrementBtn = screen.getByText('+')
        await user.click(incrementBtn)
        await user.click(incrementBtn)
        expect(totalPrice.textContent).toBe('$6.00')

        const decrementBtn = screen.getByText('-')
        await user.click(decrementBtn)
        expect(totalPrice.textContent).toBe('$4.00')
    })
    
})