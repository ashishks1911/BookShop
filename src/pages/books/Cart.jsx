import React from 'react'
import { getImageUrl } from '../../utils/getImageUrl'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../../redux/features/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const totalAmount = cartItems.reduce((acc, item) => acc + item.newPrice, 0);
  return (
    <div className='shadow-md w-[50%] mx-auto'>
      <div className='flex justify-between px-2 my-4'>
        <h1 className='font-semibold text-xl'>Shopping Cart</h1>
        <button className='text-sm text-white bg-red-500 rounded px-2 py-1' onClick={handleClearCart}>Clear Cart</button>
      </div>
      {
        cartItems.map((item) => (
          <div key={item._id} className='flex mb-2 px-2' >
            <div className='w-[120px] h-28 overflow-hidden rounded-md'>
              <img src={getImageUrl(item.coverImage)} alt="" className='w-full object-cover rounded-md' />
            </div>
            <div className='px-2 flex justify-between flex-1'>
              <div className='relative'>
                <h2 className='text-md font-semibold'>{item.title}</h2>
                <p className='text-sm font-semibold' >Category : <span className='text-gray-500'>{item.category}</span></p>
                <p className='text-sm absolute bottom-3 font-semibold'>Qty : <span className='text-gray-500'>1</span></p>
              </div>
              <div className='relative'>
                <h2>₹{item.newPrice}</h2>
                <button className='mt-4 text-sm text-blue-500 absolute bottom-3 ' onClick={() => handleRemoveItem(item)}>Remove</button>
              </div>
            </div>
          </div>
        ))
      }
      <hr className='mx-2' />
      <div className='flex justify-between px-2'>
        <div>
          <h2>Subtotal</h2>
          <span className='text-xs text-gray-500'>Shipping and taxes calculated at checkout</span>
        </div>
        <p>₹{totalAmount}</p>
      </div>
      <div className='p-2'>
        <Link to={'/checkout'}>
          <button className='w-full bg-blue-500 hover:bg-blue-700 text-white py-2 font-semibold rounded'>Checkout</button>
        </Link>
        <button className='w-full py-2'>Continue Shopping</button>
      </div>
    </div>
  )
}

export default Cart
