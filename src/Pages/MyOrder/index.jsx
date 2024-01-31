import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoopingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'

export const MyOrder = () => {
  const context = useContext(ShoopingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1
  return (
    <>
      <p>My Order</p>
      <Link to='/my-orders'>
        <p>c----</p>
      </Link>
      <div className='flex flex-col w-80'>
        {
    context.order?.[index]?.products.map((product) => (
      <OrderCard
        key={product.id}
        id={product.id}
        title={product.title}
        imageUrl={product.images}
        price={product.price}

      />
    ))
    }
      </div>
    </>
  )
}
