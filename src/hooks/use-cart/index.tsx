import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'
export type useCartContextData = {
  items: string[]
}

const cartContext = createContext<useCartContextData>({
  items: []
})

const CART_KEY = 'cartItems'
// export function useCart() {
//   const context = useContext(cartContext)
//   return context
// }
export const useCart = () => useContext(cartContext)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItens] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)
    setCartItens(data)
  }, [])

  return (
    <cartContext.Provider value={{ items: cartItems }}>
      {children}
    </cartContext.Provider>
  )
}
