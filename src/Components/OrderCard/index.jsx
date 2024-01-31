import React from 'react'
// import inconCancel from '../../assets/cancel.svg'
import iconDelete from '../../assets/delete.svg'

export const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props

  let renderDeletIcon
  if (handleDelete) {
    renderDeletIcon = <img src={iconDelete} alt='cancel icon' className='h-5 w-5' onClick={() => handleDelete(id)} />
  }
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='h-full w-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        {renderDeletIcon}
      </div>
    </div>
  )
}
