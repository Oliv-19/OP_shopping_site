import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav/Nav";
import HomePage from "../components/HomePage";
import Shop from "../components/Shop";
import Cart from "../components/Cart";

function renderRouter(element){
    render(
        <BrowserRouter >
            {element}
        </BrowserRouter>
    )
}

describe('test', ()=>{
    it('loads nav', ()=>{
        renderRouter(<Nav />)
        expect(screen.getByText(/shopping site/i)).toBeInTheDocument()
    })
    it('loads Shop page', ()=>{
        renderRouter(<Shop/>)
        expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    })
    it('loads Cart page', ()=>{
        renderRouter(<Cart/>)
        expect(screen.getByText(/quantity/i)).toBeInTheDocument()
    })
})