import React, { useContext } from 'react'
import './styles.css'
import cancel from './cancel.svg'
import { ShoopingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils/index'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoopingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <img src={cancel} alt='icon delete' className='icon-cancel cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
      </div>
      <div className='px-6 overflow-y-scroll'>
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
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light text-xl'>Total</span>
          <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}
