import React, { useRef } from "react";
import {
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
} from "../assets";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const booksData = [
  {
    id: 1,
    imageLink: book1,
    name: "featured 1 books",
    discountedPrice: 15,
    price: 20,
  },
  {
    id: 2,
    imageLink: book2,
    name: "featured 2 books",
    discountedPrice: 15.99,
    price: 20.99,
  },
  {
    id: 3,
    imageLink: book3,
    name: "featured 3 books",
    discountedPrice: 13.99,
    price: 15.99,
  },
  {
    id: 4,
    imageLink: book4,
    name: "featured 4 books",
    discountedPrice: 14.99,
    price: 14.99,
  },
  {
    id: 5,
    imageLink: book5,
    name: "featured 5 books",
    discountedPrice: 14.99,
    price: 14.99,
  },
  {
    id: 6,
    imageLink: book6,
    name: "featured 6 books",
    discountedPrice: 14.99,
    price: 14.99,
  },
  {
    id: 7,
    imageLink: book7,
    name: "featured 7 books",
    discountedPrice: 14.99,
    price: 14.99,
  },
  {
    id: 8,
    imageLink: book8,
    name: "featured 8 books",
    discountedPrice: 14.99,
    price: 14.99,
  },
  {
    id: 9,
    imageLink: book9,
    name: "featured 9 books",
    discountedPrice: 14.99,
    price: 14.99,
  },
  {
    id: 10,
    imageLink: book10,
    name: "featured 10 books",
    discountedPrice: 110.99,
    price: 114.99,
  },
];

interface SwiperType {
  slideNext: () => void;
  slidePrev: () => void;
}

function FeaturedBooks() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        {" "}
        <span>featured books</span>{" "}
      </h1>

      <div className="swiper featured-slider">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            onSlideChange={() => console.log("Slide changed")}
            onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
          >
            {booksData.map((books) => (
              <SwiperSlide key={books.id}>
                <Card {...books} />
              </SwiperSlide>
            ))}
          </Swiper>

        <button className="swiper-button-next" onClick={handleNext} />
        <button className="swiper-button-prev" onClick={handlePrev} /   >
      </div>
    </section>
  );
}

export default FeaturedBooks;
