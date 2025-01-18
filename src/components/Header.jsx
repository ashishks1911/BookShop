import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { MdOutlineAccountCircle } from 'react-icons/md'

const Header = () => {
  return (
    <div className='fixed top-0 w-full z-50'>
      <header className='flex w-full items-center justify-between text-xl lg:text-3xl px-8 md:px-8 lg:px-20 py-2 bg-gray-200 gap-3'>
        <div>
          <img src="" alt="logo" />
        </div>
        <div className='w-full'>
          <div id='search-box' className= 'bg-slate-50'>
            <form action="get" className='flex px-3 py-2 gap-1' >
              <a href="#" className='bg-slate-50'><IoIosSearch /></a>
              <input className='w-full border-0 focus:outline-none bg-slate-50 text-lg' type="text" placeholder='Search' />
              <button variant='primary'>Submit</button>
            </form>
          </div>
        </div>
        <div>
          <ul className='flex justify-center gap-10'>
            <li><a href="#"><MdOutlineAccountCircle /></a></li>
            <li><a href="#"><IoCartOutline /></a></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
