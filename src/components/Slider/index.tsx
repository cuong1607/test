import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner4.jpg";
import banner4 from "../../assets/images/banner5.png";

// Import Swiper styles
import "swiper/css";
import { Image } from "antd";

const SliderComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        <SwiperSlide>
          <div style={{ background: "violet", width: "100%", height: "200px" }}>
            Foodter1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "violet", width: "100%", height: "200px" }}>
            Foodter2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "violet", width: "100%", height: "200px" }}>
            Foodter3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ background: "violet", width: "100%", height: "200px" }}>
            Foodter4
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderComponent;
