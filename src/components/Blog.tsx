import React from "react";
import { blog1, blog2, blog3, blog4, blog5 } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";

const blogData = [
  {
    id: 1,
    imageLink: blog1,
    title: "blog title goes here",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.`,
  },
  {
    id: 2,
    imageLink: blog2,
    title: "blog title goes here",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.`,
  },
  {
    id: 3,
    imageLink: blog3,
    title: "blog title goes here",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.`,
  },
  {
    id: 4,
    imageLink: blog4,
    title: "blog title goes here",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.`,
  },
  {
    id: 5,
    imageLink: blog5,
    title: "blog title goes here",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.`,
  },
];

function Blog() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        <span>our blogs</span>
      </h1>

      <div className="swiper blogs-slider">
        {/* <div className="swiper-wrapper"> */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper: {}) => {}}
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="swiper-slide box" key={blog.id}>
                <div className="image">
                  <img src={blog.imageLink} alt={blog.title} />
                </div>
                <div className="content">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <a href="#" className="btn">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Blog;
