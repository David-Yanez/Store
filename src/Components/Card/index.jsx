import React, { useContext } from 'react'
import { ShoopingCartContext } from '../../Context'

export const Card = (data) => {
  const context = useContext(ShoopingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCar = (e, productData) => {
    e.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderAddToCar = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <a class='text-white bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  '>Added</a>

      )
    } else {
      return (
        <a onClick={(e) => addProductsToCar(e, data.data)} class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer '>Add to cart</a>

      )
    }
  }

  return (

    <div onClick={() => showProduct(data.data)} class='w-56 max-w-sm   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a>
        <img class='p-4 rounded-t-lg  rounded-lg' src={data.data.images[0]} alt={data.data.title} />
      </a>
      <div class='px-5 pb-5'>
        <a>
          <h5 class='text-x font-semibold tracking-tight text-gray-900 dark:text-white'>{data.data.title}</h5>
        </a>
        <div class='flex items-center mt-2.5 mb-5'>
          <span class='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>{data.data.category.name}</span>
        </div>
        <div class='flex items-center justify-between'>
          <span class='text-2xl font-bold text-gray-900 dark:text-white'>${data.data.price}</span>
          {renderAddToCar(data.data.id)}
        </div>
      </div>
    </div>

  )
}
