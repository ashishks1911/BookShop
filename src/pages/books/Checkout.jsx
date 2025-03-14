import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.newPrice, 0);
  return (
    <div className='bg-gray-100 py-3 shadow'>
      <div className='px-5 mt-8'>
        <h1 className='text-2xl font-bold'>Cash On Delivery</h1>
        <p>Total Price : ₹{totalAmount}</p>
        <span>Items : {cartItems.length}</span>
      </div>
      <div className='bg-white mx-5 my-4 flex flex-col sm:flex-row p-5 mb-3'>
        <div className='w-[30%]'>
          <h1>Personal Details</h1>
          <p className='text-gray-500'>Please fill out all the fields</p>
        </div>
        <div className='sm:px-5 flex-1'>
          <form>
            <div className='mb-2'>
              <label htmlFor="name" className='block'>Full Name</label>
              <input type="text" name='name' id='name' className='w-full box-border px-3 py-2 bg-gray-100 focus:outline-none rounded-md' />
            </div>
            <div className='mb-2'>
              <label htmlFor="email" className='block'>Email Address</label>
              <input type="email" name='email' id='email' className='w-full box-border px-3 py-2 bg-gray-100 focus:outline-none rounded-md' />
            </div>
            <div className='mb-2'>
              <label htmlFor="phone" className='block'>Phone Number</label>
              <input type="tel" name='phone' id='phone' placeholder='+91 8899889988' className='w-full px-3 py-2 bg-gray-100 focus:outline-none box-border rounded-md' />
            </div>
            <div className='mb-2 flex sm:gap-12 gap-3'>
              <div className='flex-1'>
                <label htmlFor="address" className='block'>Address / Street</label>
                <input type="text" name='address' id='address' className='w-full box-border px-3 py-2 bg-gray-100 focus:outline-none rounded-md' />
              </div>
              <div className='w-[30%]'>
                <label htmlFor="city" className='block'>City</label>
                <input type="text" name='city' id='city' className='w-full px-3 box-border py-2 bg-gray-100 focus:outline-none rounded-md' />
              </div>
            </div>
            <div className='mb-2 flex sm:gap-12 gap-3'>
              <div className='sm:flex-1'>
                <label htmlFor="country" className='block'>Country <span className='sm:visible hidden'>/ Region </span></label>
                <input type="text" name='country' id='country' placeholder='Country' className='w-full px-3 py-2 bg-gray-100 focus:outline-none box-border rounded-md' />
              </div>
              <div className='sm:flex-2'>
                <label htmlFor="state" className='block'>State <span className='sm:visible hidden'>/ province</span></label>
                <input type="text" name='state' id='state' placeholder='State' className='w-full box-border px-3 py-2 bg-gray-100 focus:outline-none rounded-md' />
              </div>
              <div>
                <label htmlFor="zip" className='block'>Zipcode</label>
                <input type="text" name='zip' id='zip' className='w-full px-3 py-2 bg-gray-100 box-border focus:outline-none rounded-md' />
              </div>
            </div>
            <div className='mb-2 flex gap-2 items-center'>
              <input type="checkbox" name="tnc" id="tnc" className='size-3' />
              <p className='text-sm'>I am agree to the <Link to={'/'} className='text-blue-500'>Terms and Conditions</Link> and <Link to={'/'} className='text-blue-500'>Shopping Policy.</Link></p>
            </div>
            <div className='text-right pl-5'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 font-bold rounded-md'>Place an Order</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Checkout
