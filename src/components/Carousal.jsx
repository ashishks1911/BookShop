import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Carousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { src: './f1.webp', alt: 'Slide 1' },
    { src: './f2.webp', alt: 'Slide 2' },
    { src: './f3.webp', alt: 'Slide 3' },
    { src: './f2.webp', alt: 'Slide 4' },
    { src: './f1.webp', alt: 'Slide 5' }
  ];
  let goToSlide = (index) => {
    console.log(index);
    setActiveIndex(index);
  }

  let prevSlide = () => {
    setActiveIndex((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }

  let nextSlide = () => {
    setActiveIndex((prevSlide) => (prevSlide + 1) % slides.length);
  }

  return (
    <div className='relative overflow-hidden h-[50rem] w-[70%] mx-auto'>
      <div className='flex'>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={`overflow-hidden w-full h-[50rem] mx-auto ${activeIndex === index ? 'block' : 'hidden'}`}>
              <img src={slide.src} alt={slide.alt} className='w-full h-full object-fill' />
            </div>
          )
        })}
      </div>
      
      <div className='flex gap-3 justify-center absolute inset-x-0 bottom-0 items-end pb-8 h-16 z-40'>
        {slides.map((_, index) => (
          <button key={index} type="button" className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-slate-300' : 'bg-slate-600'}`} aria-label={`Slide ${index + 1}`} onClick={()=> goToSlide(index)}></button>
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between px-10'>
        <button type="button" className='hover:bg-slate-100 hover:text-gray-800 text-slate-100 rounded-full' onClick={prevSlide}>
          <BiChevronLeft size={40} />
        </button>
        <button type="button" className='hover:bg-slate-100 hover:text-gray-800 text-slate-100 rounded-full' onClick={nextSlide}>
          <BiChevronRight size={40} />
        </button>
      </div>
      
    </div>
  )
}

export default Carousal;