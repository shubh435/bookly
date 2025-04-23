import React from "react";
import { book1, book2, book3, book4, book5, book6 } from "../assets";
import { SwiperSlide,Swiper } from "swiper/react";

const NewArrivalBooks = [
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
];
function NewArrival() {
  return (
    <section className="arrivals" id="arrivals">
      <h1 className="heading">
        {" "}
        <span>new arrivals</span>{" "}
      </h1>

      <div className="swiper arrivals-slider">
          <Swiper 
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper: {}) => {}}
          >
            {NewArrivalBooks.slice(0,3).map((books) => (
              <SwiperSlide key={books.id}>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src={books.imageLink} alt={`books ${books.id}`} />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      ${books.discountedPrice} <span>${books.price}</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

      <div className="swiper arrivals-slider">

        <Swiper 
           breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper: {}) => {}}
          >
            {NewArrivalBooks.slice(3,6

            ).map((books) => (
              <SwiperSlide key={books.id}>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src={books.imageLink} alt={`books ${books.id}`} />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      ${books.discountedPrice} <span>${books.price}</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </section>
  );
}

export default NewArrival;
