import { render, screen } from "@testing-library/react";
import { getByText } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Nav from "../components/Nav";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../components/routes";

function renderRouter(){
    const router = createMemoryRouter(routes)
    render(<RouterProvider router ={router} />)
}

describe('test', ()=>{
    it('loads nav', ()=>{
        renderRouter()
        expect(screen.getByText(/shopping site/i)).toBeInTheDocument()
    })
})