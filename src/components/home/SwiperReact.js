import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperReact.css";
import { Pagination, Navigation } from 'swiper/modules';

const SwiperReact = () => {
  const slides = [
    { id: 1, content: "Card 1", image: "https://via.placeholder.com/150" },
    { id: 2, content: "Card 2", image: "https://via.placeholder.com/150" },
    { id: 3, content: "Card 3", image: "https://via.placeholder.com/150" },
    { id: 4, content: "Card 4", image: "https://via.placeholder.com/150" },
    { id: 5, content: "Card 5", image: "https://via.placeholder.com/150" },
    { id: 6, content: "Card 6", image: "https://via.placeholder.com/150" },
    { id: 7, content: "Card 7", image: "https://via.placeholder.com/150" },
    { id: 8, content: "Card 8", image: "https://via.placeholder.com/150" },
    { id: 9, content: "Card 9", image: "https://via.placeholder.com/150" },
    { id: 10, content: "Card 10", image: "https://via.placeholder.com/150" },
  ];
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        navigation
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="card">
              <img src={slide.image} />
              <h3>{slide.content}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperReact;
