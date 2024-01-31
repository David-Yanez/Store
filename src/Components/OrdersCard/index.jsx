import React from 'react'
import chevronIcon from './chevronRightIcon.svg'
import clendarIcon from './calendarIcon.svg'
import ShopBagIcon from './ShopBagIcon.svg'

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props

  return (
    <div className='flex justify-between items-center mb-3 border-black border w-80 rounded-lg p-4'>
      <p className='flex justify-between items-center w-full'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2 '>
            <img src={clendarIcon} alt='Calendar Icon' className='h-4 w-4' />
            <span>25.01.24</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src={ShopBagIcon} alt='Bag Icon' className='h-4 w-4' />
            <span>{totalProducts} articles</span>
          </div>

        </div>
        <span className='font-medium text-2xl'>$ {totalPrice}</span>
        <img src={chevronIcon} alt='Icon Chevron' className='h-7 w-7' />
      </p>

    </div>
  )
}
