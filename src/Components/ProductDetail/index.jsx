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
        <img src={cancel} alt='icon cancel' className='icon-cancel' onClick={() => context.closeProductDetail()} />
      </div>
    </aside>
  )
}
