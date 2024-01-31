import { useContext } from 'react'
import { Card } from '../../Components/Card/index'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoopingCartContext } from '../../Context'

export const Home = () => {
  const context = useContext(ShoopingCartContext)

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  /* const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      return (
        <div>holaaaaaaaaa</div>
      )
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  } */

  return (
    <>
      <h1 className='font-medium text-xl mb-4'>Exclusive Products</h1>
      <input
        className='rounded-lg border border-black w-80 p-4 mb-4 ' type='text' placeholder='Search a product'
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
        renderView()
      }
      </div>
      <ProductDetail />
    </>
  )
}
