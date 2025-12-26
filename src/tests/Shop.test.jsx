import {screen, waitFor} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop/Shop";
import { CartContext, ProductContext } from "../components/Contexts";
import { useCart } from "../components/hooks";
import { renderRouter } from "./Nav.test";

describe('Shop tests', ()=>{
    const Wrapper = ({children})=>{
        const cart = useCart()
        return (
            <CartContext  value={cart}>
                {children}
            </CartContext>
        )
    }
    it('loads Shop products', ()=>{
        const mockValue = {cart : [], setCart: vi.fn() }
        renderRouter(
            <ProductContext value={[{ id: 1, title: 'Test Item' }]}>
                <CartContext value={mockValue}>
                    <Shop/>
                </CartContext>
            </ProductContext>
        )
        expect(screen.getByText(/test item/i)).toBeInTheDocument()
    })
    it('replaces addToCart button for removeFromCart button on click', async()=>{
        const user = userEvent.setup()
        renderRouter(
            <ProductContext value={[{ id: 1, title: 'Test Item' }]}>
                <Wrapper  >
                    <Shop/>
                </Wrapper> 
            </ProductContext>
        ) 
        const button = screen.getByTestId('addToCart1')
        expect(button).toBeInTheDocument()
        await user.click(button)
        const removeBtn = await screen.findByTestId('removeFromCart1')
        expect(removeBtn).toBeInTheDocument()

    })
    it('replaces removeFromCart button for addToCart button on click', async()=>{
        const user = userEvent.setup()
        renderRouter(
            <ProductContext value={[{ id: 1, title: 'Test Item' }]}>
                <Wrapper  >
                    <Shop/>
                </Wrapper> 
            </ProductContext>
        ) 
        const button = screen.getByTestId('addToCart1')
        expect(button).toBeInTheDocument()
        await user.click(button)
        const removeBtn = await screen.findByTestId('removeFromCart1')
        expect(removeBtn).toBeInTheDocument()
        await user.click(button)
        const addBtn = await waitFor(()=> screen.findByTestId('addToCart1'))
        expect(addBtn).toBeInTheDocument()

    })
})