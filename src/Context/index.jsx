import { createContext, useState } from 'react'

export const ShoopingCartContext = createContext()

export const ShoopingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  // open/close side detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // open/close checkout side menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Show information product detail
  const [productToShow, setProductToShow] = useState({})

  //  add shoppin cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoopingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
    }}
    >

      {children}
    </ShoopingCartContext.Provider>

  )
}
