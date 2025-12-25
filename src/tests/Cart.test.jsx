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
        return (
            <CartContext  value={{cart, addToCart, removeFromCart}}>
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
    
})