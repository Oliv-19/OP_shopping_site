import { render, screen} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav/Nav";

export function renderRouter(element){
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