import { render, screen, waitFor} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav/Nav";
import routes from "../components/routes";
import { CartContext } from "../components/Contexts";
import { useMockHook } from "./Cart.test";

export function renderRouter(element){
    render(
        <BrowserRouter >
            {element}
        </BrowserRouter>
    )
}
describe('Nav tests', ()=>{
    const Wrapper = ({children})=>{
        const cart = useMockHook() 
        return (
            <CartContext  value={cart}>
                {children}
            </CartContext>
        )
    }
    it('loads nav', ()=>{
        renderRouter(
            <Wrapper>
                <Nav />
            </Wrapper>
        )
        expect(screen.getByText('Shopping site')).toBeInTheDocument()
    })
    it('displays amount of items in the cart', async() => {
        const user = userEvent.setup()
        const router = createBrowserRouter(routes)
        render(
            <RouterProvider router = {router} />
        )
        await user.click(screen.getByTestId('shop'))
        const addBtn = await waitFor(() => screen.findByTestId('addToCart1'), {timeout:2000}) 
        expect(addBtn).toBeInTheDocument()
        await user.click(addBtn)

        expect(screen.getByTestId('amount').textContent).toBe('1')
    })
    it('displays 0 when cart is empty', () => {
        const router = createBrowserRouter(routes)
        render(
            <RouterProvider router = {router} />
        )
        const amount = screen.getByTestId('amount')
        expect(amount.textContent).toBe('0')
    })
})