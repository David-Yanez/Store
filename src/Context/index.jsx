import { createContext, useState } from 'react'

export const ShoopingCartContext = createContext()

export const ShoopingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  // open/close side detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

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
      setCartProducts
    }}
    >

      {children}
    </ShoopingCartContext.Provider>

  )
}
