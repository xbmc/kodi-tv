import React from "react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles need to be require for now
require("swiper/swiper.scss");
require("swiper/components/navigation/navigation.scss");
require("swiper/components/pagination/pagination.scss");

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

interface Props {
  slides: string[];
}

class Carousel extends React.Component<Props> {
  render() {
    return (
      <Swiper
        style={{ maxWidth: "400px", "--swiper-theme-color": "#17B2E7" }}
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

export default Carousel;
