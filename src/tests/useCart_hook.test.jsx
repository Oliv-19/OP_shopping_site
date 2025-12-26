import { renderHook, act} from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import { useCart } from "../components/hooks";

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
        expect(result.current.cart).toEqual([{product:{ id: 1, title: 'Test Item' }, quantity: 1}])
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
            result.current.removeFromCart(1)
        )
        expect(result.current.cart).toEqual([{product:{ id: 2, title: 'Test Item 2' }, quantity: 1}])
    })
    it('increments quantity', ()=>{
        const {result} = renderHook(()=> useCart())
        act(()=>  
            result.current.addToCart({ id: 1, title: 'Test Item' })
        )
        act(()=> 
            result.current.incrementQuantity(1)    
        )
        expect(result.current.cart).toEqual([{product:{ id: 1, title: 'Test Item' }, quantity: 2}])
    })
    it('decrements quantity', ()=>{
        const {result} = renderHook(()=> useCart())
        act(()=>  
            result.current.addToCart({ id: 1, title: 'Test Item' })
        )
        act(()=> 
            result.current.incrementQuantity(1)    
        )
        act(()=> 
            result.current.decrementQuantity(1)    
        )
        expect(result.current.cart).toEqual([{product:{ id: 1, title: 'Test Item' }, quantity: 1}])
    })
    it('calculates total price per product quantity', ()=>{
        const {result} = renderHook(()=> useCart())
        act(()=>  
            result.current.addToCart({ id: 1, title: 'Test Item', price: 2})
        )
        act(()=>  
            result.current.incrementQuantity(1)
        )
        expect(result.current.totalPerProduct(1)).toBe(4)
    })
    it('calculates total', ()=>{
        const {result} = renderHook(()=> useCart())
        act(()=>  
            result.current.addToCart({ id: 1, title: 'Test Item', price: 2})
        )
        act(()=>  
            result.current.addToCart({ id: 2, title: 'Test Item 2', price: 2})
        )
        expect(result.current.total).toBe(4)
    })
    it('calculates total of one item', ()=>{
        const {result} = renderHook(()=> useCart())
        act(()=>  
            result.current.addToCart({ id: 1, title: 'Test Item', price: 2})
        )
        expect(result.current.total).toBe(2)
    })
    
})