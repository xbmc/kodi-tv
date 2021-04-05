import React from "react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button";

// Import Swiper styles need to be require for now
require("swiper/swiper.scss");
require("swiper/components/navigation/navigation.scss");
require("swiper/components/pagination/pagination.scss");

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

interface Props {
  slides: string[];
}
interface FullWidthProps {
  slides: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    url: string;
    buttontext: string;
  }[];
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
          <SwiperSlide key={element}>
            <img src={element} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

class FullWidthHeroCarousel extends React.Component<FullWidthProps> {
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
                <SwiperSlide key={element.url}>
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src={element.image}
                      alt=""
                    />
                    <div
                      className="absolute inset-0 bg-kodibg"
                      style={{ mixBlendMode: "multiply" }}
                    ></div>
                  </div>
                  <div className="relative px-6 pt-12 pb-16">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
                      <span className="block text-gray-50">{element.title}</span>
                      <span className="block text-kodi-lighter">
                        {element.subtitle}
                      </span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-kodi-lighter">
                      {element.description}
                    </p>
                    <div className="mt-10 mx-auto max-w-none flex justify-center">
                      <div className="space-y-0 mx-auto grid-cols-1 gap-5">
                        <Button href={element.url} variant="secondary">
                          {element.buttontext}
                        </Button>
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
