import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cancel from './cancel.svg'
import { ShoopingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils/index'
import './styles.css'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoopingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      data: '11.01.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <img src={cancel} alt='icon delete' className='icon-cancel cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
      </div>
      <div className='px-6 overflow-y-auto  flex-1'>
        {
        context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light text-xl mb-2'>Total</span>
          <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full py-3 text-white bg-black rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}
