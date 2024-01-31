import { useContext } from 'react'
import { Card } from '../../Components/Card/index'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoopingCartContext } from '../../Context'

export const Home = () => {
  const context = useContext(ShoopingCartContext)

  return (
    <>
      <h1 className='font-medium text-xl mb-4'>Exclusive Products</h1>
      <input
        className='rounded-lg border border-black w-80 p-4 mb-4 ' type='text' placeholder='Search a product'
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
        context.items?.map((item) => (
          <Card key={item.id} data={item} />
        )

        )
      }
      </div>
      <ProductDetail />
    </>
  )
}
