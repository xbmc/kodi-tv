import React from "react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles need to be require for now
require("swiper/swiper.scss");
require("swiper/components/navigation/navigation.scss");
require("swiper/components/pagination/pagination.scss");

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

interface Props {
  slides: string[];
}

class Carousel extends React.Component<Props> {
  render() {
    return (
      <Swiper
        style={{ maxWidth: "1000px", "--swiper-theme-color": "#17B2E7" }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        {this.props.slides.map(element => (
          <SwiperSlide>
            <img src={element} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

class FullWidthHeroCarousel extends React.Component<Props> {
  render() {
    return (
      <div className="relative pb-6">
        <div className="mx-auto">
          <div className="relative shadow-xl overflow-hidden flex">
            <Swiper
              style={{ "--swiper-theme-color": "#17B2E7" }}
              spaceBetween={0}
              slidesPerView={1}
              loop
              autoplay={{ delay: 5000 }}
              pagination={{
                clickable: true,
              }}
            >
              {this.props.slides.map(element => (
                <SwiperSlide>
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src={element.image}
                      alt=""
                    />
                    <div
                      className="absolute inset-0 bg-gray-700"
                      style={{ mixBlendMode: "multiply" }}
                    ></div>
                  </div>
                  <div className="relative px-6 pt-12 pb-16">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
                      <span className="block text-white">{element.title}</span>
                      <span className="block text-kodi-lighter">
                        {element.subtitle}
                      </span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-kodi-lighter">
                      {element.description}
                    </p>
                    <div className="mt-10 mx-auto max-w-none flex justify-center">
                      <div className="space-y-0 mx-auto grid-cols-1 gap-5">
                        <a
                          href={element.url}
                          className="flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-kodi bg-white hover:bg-indigo-50 px-8"
                        >
                          {element.buttontext}
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export { Carousel, FullWidthHeroCarousel };
