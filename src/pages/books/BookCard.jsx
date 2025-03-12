import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../../utils/getImageUrl'

const BookCard = ({ book }) => {
  return (
    <div className='grid grid-cols-[40%_60%] w-[26rem] hover:shadow-lg rounded-md mt-3 border '>

      <div className='overflow-hidden p-1'>
        <Link>
          <img src={getImageUrl(book.coverImage)} alt="" className='w-full bg-cover p-2 hover:scale-105 transition-all duration-200' />
        </Link>
      </div>

      <div className='pl-2'>
        <h3 className='text-lg py-2 font-primary font-semibold hover:text-blue-500'>{book.title}</h3>
        <p className='text-gray-500 text-sm mb-2'>{book.description}</p>
        <p className='font-medium mb-2'>
          ₹ {book.newPrice} <span className='line-through text-gray-400 px-3'>₹ {book.oldPrice}</span></p>
        <button className='btn-primary hover:text-white'>Add to Cart</button>
      </div>
    </div>
  )
}

export default BookCard
