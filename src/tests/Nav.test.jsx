import { render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav/Nav";
import HomePage from "../components/HomePage";
import Shop from "../components/Shop/Shop";
import Cart from "../components/Cart/Cart";
import { CartContext, ProductContext } from "../components/Contexts";
import { useContext } from "react";

function renderRouter(element){
    render(
        <BrowserRouter >
            {element}
        </BrowserRouter>
    )
}

describe('Nav tests', ()=>{
    it('loads nav', ()=>{
        renderRouter(<Nav />)
        expect(screen.getByText(/shopping site/i)).toBeInTheDocument()
    })
})

describe('Shop tests', ()=>{
    it('loads Shop products', ()=>{
        const mockValue = { setCart: vi.fn() }
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
        const mockValue = {setCart: vi.fn() }
        renderRouter(
            <ProductContext value={[{ id: 1, title: 'Test Item' }]}>
                <CartContext value={mockValue}>
                    <Shop/>
                </CartContext>
            </ProductContext>
        )
        const button = screen.getByTestId('addToCart1')
        await user.click(button)
        expect(screen.queryByTestId('addToCart1')).toBe(null)
    })
    it('calls addToCart function', async()=>{
        const user = userEvent.setup()
        const mockValue = {cart: [], setCart: vi.fn() }
        renderRouter(
            <ProductContext value={[{ id: 1, title: 'Test Item' }]}>
                <CartContext value={mockValue}>
                    <Shop/>
                </CartContext>
            </ProductContext>
        )
        const button = screen.getAllByTitle('Add to cart')
        await user.click(button[0])
        expect(mockValue.setCart).toHaveBeenCalled()
    })
    it('calls removeFromCart function', async()=>{
        const user = userEvent.setup()
        const mockValue = {cart: [], setCart: vi.fn() }
        renderRouter(
            <ProductContext value={[{ id: 1, title: 'Test Item' }]}>
                <CartContext value={mockValue}>
                    <Shop/>
                </CartContext>
            </ProductContext>
        )
        const button = screen.getAllByTitle('Add to cart')
        await user.click(button[0])
        await user.click(button[0])
        expect(mockValue.setCart).toHaveBeenCalled()
    })
    
})

describe('Cart tests', ()=>{
    it('loads Cart item', ()=>{
        const mockValue = { cart: [{ id: 1, title: 'Test Item' }] }
        renderRouter(
            <CartContext value={mockValue}>
                <Cart/>
            </CartContext>
        )
        expect(screen.getByText(/test item/i)).toBeInTheDocument()
    })
    
})