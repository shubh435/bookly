import React from "react";
import { user1, user2, user3, user4, user5, user6 } from "../assets";
import { SwiperSlide, Swiper } from "swiper/react";

const testimonialData = [
  {
    id: 1,
    imageLink: user1,
    full_name: "John Doe",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                    facere hic.`,
    rating: 4.5,
  },
  {
    id: 2,
    imageLink: user2,
    full_name: "John Alex",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                    facere hic.`,
    rating: 4,
  },
  {
    id: 3,
    imageLink: user3,
    full_name: "John Alex",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                    facere hic.`,
    rating: 4,
  },
  {
    id: 4,
    imageLink: user4,
    full_name: "Sit Alex",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                    facere hic.`,
    rating: 4,
  },
  {
    id: 5,
    imageLink: user5,
    full_name: "Alex Doe",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                    facere hic.`,
    rating: 2,
  },
  {
    id: 6,
    imageLink: user6,
    full_name: "Alex Alex",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                    facere hic.`,
    rating: 3,
  },
];

function ClientTestimonial() {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        {" "}
        <span>client's reviews</span>{" "}
      </h1>

      <div className="swiper reviews-slider">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper: {}) => console.log(swiper)}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div key={testimonial.id} className="swiper-slide box">
                <img src={testimonial.imageLink} alt={testimonial.full_name} />
                <h3>{testimonial.full_name}</h3>
                <p>{testimonial.description}</p>
                <div className="stars">
                  {Array.from(
                    { length: Math.floor(testimonial.rating) },
                    (_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    )
                  )}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt"></i>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ClientTestimonial;
