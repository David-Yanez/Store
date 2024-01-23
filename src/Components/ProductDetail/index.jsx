import React, { useContext } from 'react'
import './styles.css'
import cancel from './cancel.svg'
import { ShoopingCartContext } from '../../Context'

export const ProductDetail = () => {
  const context = useContext(ShoopingCartContext)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <img src={cancel} alt='icon cancel' className='icon-cancel cursor-pointer' onClick={() => context.closeProductDetail()} />
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={context.productToShow.images} alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>

    </aside>
  )
}
