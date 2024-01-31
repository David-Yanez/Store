import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShoopingCartContext } from '../../Context'

export const MyOrders = () => {
  const context = useContext(ShoopingCartContext)

  return (
    <>
      <h1>MyOrders</h1>

      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }

    </>
  )
}
