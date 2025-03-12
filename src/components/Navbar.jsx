import React, { useState } from "react";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import avatarImg from '../assets/avatar.png'

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
]
const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState();
  const currentUser = true;

  return (
    <header className="max-w-screen mx-auto md:px-24 px-4 py-6">
      <nav className="flex justify-between items-center">

        {/* Left Side */}
        <div className="flex items-center gap-8">
          <HiMiniBars3CenterLeft className="size-6" />

          {/* Search input */}
          <div className="w-60 space-x-2 relative">
            <IoSearchOutline className="absolute top-2 left-3" />
            <input type="text" placeholder="Search by name, author or title..." className="bg-[#eaeaea] w-full py-1 px-6 rounded-md focus:outline-none" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex space-x-4 items-center">
          {
            currentUser ? <>
              <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img src={avatarImg} alt="" className="size-8 rounded-full ring-2" />
              </button>
              {
                isDropdownOpen &&
                <div className="absolute bg-white shadow-lg w-48 right-2 top-16 rounded-md z-50">
                  <ul>
                    {
                      navigation.map((item) => (
                        <li key={item.name} className="px-4 py-2 hover:bg-gray-100 text-sm">
                          <Link to={item.href}> {item.name}</Link>
                        </li>
                      )
                      )
                    }
                  </ul>
                </div>
              }
            </> :
              <Link to="/">
                <HiOutlineUser className='size-6' />
              </Link>
          }
          <button>
            <HiOutlineHeart className="size-6" />
          </button>
          <Link className="px-2 relative flex">
            <HiOutlineShoppingCart className="size-6" />
            <span className="absolute right-1 bottom-3 bg-red-500 text-white rounded-full px-1 text-xs">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
