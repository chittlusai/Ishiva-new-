import React, { createContext, useContext, useMemo, useReducer } from 'react'
import type { Product } from './data'

export type CartItem = {
  product: Product
  qty: number
}

type CartState = {
  items: CartItem[]
}

type Action =
  | { type: 'add'; product: Product; qty?: number }
  | { type: 'remove'; productId: string }
  | { type: 'setQty'; productId: string; qty: number }
  | { type: 'clear' }

const CartContext = createContext<
  | {
      state: CartState
      add: (product: Product, qty?: number) => void
      remove: (productId: string) => void
      setQty: (productId: string, qty: number) => void
      clear: () => void
      subtotal: number
      count: number
    }
  | undefined
>(undefined)

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'add': {
      const qty = action.qty ?? 1
      const existing = state.items.find((i) => i.product.id === action.product.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === action.product.id ? { ...i, qty: i.qty + qty } : i,
          ),
        }
      }
      return { items: [...state.items, { product: action.product, qty }] }
    }
    case 'remove':
      return { items: state.items.filter((i) => i.product.id !== action.productId) }
    case 'setQty': {
      const qty = Math.max(1, Math.min(99, action.qty))
      return {
        items: state.items.map((i) =>
          i.product.id === action.productId ? { ...i, qty } : i,
        ),
      }
    }
    case 'clear':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })

  const api = useMemo(() => {
    const subtotal = state.items.reduce(
      (acc, i) => acc + i.qty * i.product.price,
      0,
    )
    const count = state.items.reduce((acc, i) => acc + i.qty, 0)

    return {
      state,
      add: (product: Product, qty?: number) => dispatch({ type: 'add', product, qty }),
      remove: (productId: string) => dispatch({ type: 'remove', productId }),
      setQty: (productId: string, qty: number) =>
        dispatch({ type: 'setQty', productId, qty }),
      clear: () => dispatch({ type: 'clear' }),
      subtotal,
      count,
    }
  }, [state])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
