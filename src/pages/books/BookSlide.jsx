import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from './BookCard';

export default function BookSlide({ books }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        scrollbar={{draggable:true}}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          books.map((book) => (
            <SwiperSlide key={book.id}><BookCard book={book} /></SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
