import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='md:grid grid-cols-[50%_50%] mx-auto md:py-12 py-8 flex flex-col-reverse'>
      <div className='py-3 px-3 md:px-0'>
        <h1 className='md:text-5xl text-2xl font-medium mb-5'>New Releases This Week</h1>
        <p> It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
        <button className='btn-primary mt-8'>Subscribe</button>
      </div>
      <div className='flex md:justify-end'>
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner
