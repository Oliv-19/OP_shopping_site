import { renderHook, act} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import { useCart } from "../components/App";

describe('useCart hook tests', ()=>{
    it('initial state should be empty', ()=>{
        const {result} = renderHook(()=> useCart())
        expect(result.current.cart).toEqual([])
    })
    it('adds an item to the cart', ()=>{
        const {result} = renderHook(()=> useCart())
        act(()=> 
            result.current.addToCart({ id: 1, title: 'Test Item' })
        )
        expect(result.current.cart).toEqual([{ id: 1, title: 'Test Item' }])
    })
    it('removes an item from the cart', ()=>{
        const {result} = renderHook(()=> useCart())
        act(()=> 
            result.current.addToCart({ id: 1, title: 'Test Item' })
        )
        act(()=> 
            result.current.addToCart({ id: 2, title: 'Test Item 2' })
        )
        act(()=> 
            result.current.removeFromCart({ id: 1, title: 'Test Item' })
        )
        expect(result.current.cart).toEqual([{ id: 2, title: 'Test Item 2' }])
    })
    
})