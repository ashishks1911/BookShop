import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../../utils/getImageUrl'

const BookCard = ({ book }) => {
  return (
    <div className='flex md:w-[26rem] w-[22rem] hover:shadow-lg rounded-md mt-3 border pb-3 justify-between h-[28rm]'>

      <div className='p-1 w-[40%]'>
        <Link>
          <img src={getImageUrl(book.coverImage)} alt="" className='w-full bg-cover p-2 hover:scale-105 transition-all duration-200' />
        </Link>
      </div>

      <div className=' ml-3 w-[60%] px-2 relative'>
        <h3 className='md:text-lg text-md py-2 font-primary font-semibold hover:text-blue-500'>{book.title}</h3>
        <p className='text-gray-500 md:text-sm text-xs mb-2'>{book.description.length > 100 ? `${book.description.slice(0, 80)} ....` : book.description}</p>
        <p className='font-medium mb-2'>
          ₹ {book.newPrice} <span className='line-through text-gray-400 px-3'>₹ {book.oldPrice}</span></p>
        <button className=' text-sm btn-primary hover:text-white absolute bottom-3'>Add to Cart</button>
      </div>
    </div>
  )
}

export default BookCard
