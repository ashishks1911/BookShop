import React, { useEffect, useState } from 'react'
import BookSlide from './books/BookSlide';

const Recommended = () => {

  const [books, setBooks] = useState([]);


  useEffect(() => {

    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));

  }, []);

  return (
    <div className='py-2 px-3 md:px-0'>
      <h2 className='md:text-3xl font-semibold text-xl mb-3'>Recommended for you</h2>
      <BookSlide books={books.slice(8,18)} />
    </div>
  )
}

export default Recommended

