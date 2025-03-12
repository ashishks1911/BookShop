import React, { useEffect, useState } from 'react'
import BookCard from './books/BookCard';
import BookSlide from './books/BookSlide';

const categories = ['Choose a genre', 'business', 'fiction', 'horror', 'adventure']
const TopSellers = () => {

  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredBooks = selectedCategory !== '' ? books.filter((book) => book.category === selectedCategory) : books;
  console.log(filteredBooks);



  useEffect(() => {

    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));

  }, []);

  return (
    <div className='py-2 px-3 md:px-0'>
      <h2 className='md:text-3xl font-semibold text-xl mb-3'>Top Sellers</h2>
      {/* category filter */}
      <div>
        <select name="category" id="category" onChange={(e) => setSelectedCategory(e.target.value)} className='px-3 py-1 bg-gray-200 focus:outline-none border-gray-300'>
          {
            categories.map((category, index) => (
              <option key={index} value={category} className='rounded-md bg-white'>{category}</option>
            ))
          }
        </select>
        <BookSlide books = {filteredBooks}/>
      </div>
    </div>
  )
}

export default TopSellers
