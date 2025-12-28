import { render, screen, waitFor} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav/Nav";
import routes from "../components/routes";
import { CartContext } from "../components/Contexts";
import { useMockHook } from "./Cart.test";
import { useEffect, useRef } from "react";

export function renderRouter(element){
    render(
        <BrowserRouter >
            {element}
        </BrowserRouter>
    )
}

function ComputedStyle(elem) {
    const computedStyle = window.getComputedStyle(elem, '::after')
    return computedStyle.content
}

describe('Nav tests', ()=>{
    const Wrapper = ({children, initialValue})=>{
        const cart = initialValue ? useMockHook(initialValue) : useMockHook()
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
    it('displays amount of items in the cart', () => {
        renderRouter(
            <Wrapper initialValue={{ id: 1, title: 'Test Item' }}>
                <Nav />
            </Wrapper>
        )
        
        const amount = screen.getByTestId('amount')
        expect(amount).toHaveTextContent('1')
    })
    it('displays 0 when cart is empty', () => {
        renderRouter(
            <Wrapper >
                <Nav />
            </Wrapper>
        )
       const amount = screen.getByTestId('amount')
        expect(amount).toHaveTextContent('0')
    })
})