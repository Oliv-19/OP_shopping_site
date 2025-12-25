import { render, screen} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav/Nav";
import Shop from "../components/Shop/Shop";
import Cart from "../components/Cart/Cart";
import { CartContext, ProductContext } from "../components/Contexts";
import { useCart } from "../components/App";
import routes from "../components/routes";

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
        //const mockValue = {cart : [], setCart: vi.fn((newItem)=> mockValue.cart =  newItem(mockValue.cart)) }
        renderRouter(
            <ProductContext value={[{ id: 1, title: 'Test Item' }]}>
                <Wrapper  >
                    <Shop/>
                </Wrapper>
            </ProductContext>
        )
        const button = screen.getByTestId('addToCart1')
        await user.click(button)
        // expect(mockValue.setCart).toHaveBeenCalled()
        const removeBtn = await screen.findByTestId('removeFromCart1')
        expect(removeBtn).toBeInTheDocument()

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
    it('adds item to cart when addToCart button is clicked', async()=>{
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
    it('remove item from cart when removeFromCart button is clicked', async()=>{
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
    
})