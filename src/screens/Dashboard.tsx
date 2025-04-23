import React from "react";
import {
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  dealImage,
  standImage,
} from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeaturedBooks from "../components/FeaturedBooks";
import NewsLetterCompo from "../components/NewsLetterCompo";
import NewArrival from "../components/NewArrival";
import ClientTestimonial from "../components/ClientTestimonial";
import Blog from "../components/Blog";

interface DashboardProps {}
interface SwiperType {}

interface DashboardState {
  slide: number;
}

const staticBannerImagesData = [
  {
    id: 1,
    images: book1,
    link: "product/1",
  },
  {
    id: 2,
    images: book2,
    link: "product/2",
  },
  {
    id: 3,
    images: book3,
    link: "product/3",
  },
  {
    id: 4,
    images: book4,
    link: "product/4",
  },
  {
    id: 5,
    images: book5,
    link: "product/5",
  },
  {
    id: 6,
    images: book6,
    link: "product/6",
  },
];

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      slide: 1,
    };
  }

  render() {
    return (
      <>
        <section className="home" id="home">
          <div className="row">
            <div className="content">
              <h3>Up to 75% Off</h3>
              <p>
                Discover amazing deals on books! Explore our collection and save
                big on your favorite titles.
              </p>
              <a href="#" className="btn">
                Shop Now
              </a>
            </div>

            <div className="swiper books-slider">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
                onSlideChange={() => console.log("Slide changed")}
                onSwiper={(swiper: SwiperType) => console.log(swiper)}
              >
                {staticBannerImagesData.map((banner) => (
                  <SwiperSlide key={banner.id}>
                    <a href={banner.link} className="swiper-slide">
                      <img src={banner.images} alt={`Book ${banner.id}`} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
              <img src={standImage} className="stand" alt="Stand" />
            </div>
          </div>
        </section>

        <section className="icons-container">
          <div className="icons">
            <i className="fas fa-shipping-fast"></i>
            <div className="content">
              <h3>free shipping</h3>
              <p>order over $100</p>
            </div>
          </div>

          <div className="icons">
            <i className="fas fa-lock"></i>
            <div className="content">
              <h3>secure payment</h3>
              <p>100 secure payment</p>
            </div>
          </div>

          <div className="icons">
            <i className="fas fa-redo-alt"></i>
            <div className="content">
              <h3>easy returns</h3>
              <p>10 days returns</p>
            </div>
          </div>

          <div className="icons">
            <i className="fas fa-headset"></i>
            <div className="content">
              <h3>24/7 support</h3>
              <p>call us anytime</p>
            </div>
          </div>
        </section>

        <FeaturedBooks />
        <NewsLetterCompo />
        <NewArrival />

        <section className="deal">
          <div className="content">
            <h3>deal of the day</h3>
            <h1>upto 50% off</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
              velit.
            </p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>

          <div className="image">
            <img src={dealImage} alt="deal image" />
          </div>
        </section>

        <ClientTestimonial />
        <Blog />
      </>
    );
  }
}

export default Dashboard;
