import { Swiper, SwiperSlide } from "swiper/react";
import banner11 from "../../assets/images/banner11.jpg";

// Import Swiper styles
import { Image } from "antd";
import styled from "styled-components";
import "swiper/css";

const SliderComponent = () => {
  return (
    <>
      <SwiperStyled
        spaceBetween={50}
        slidesPerView={1}
        style={{ width: "100%" }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide style={{ width: "100%" }}>
          <ImageStyled
            style={{ height: "100px", width: "100%" }}
            src={banner11}
            preview={false}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%" }}>
          <ImageStyled
            style={{ height: "100px", width: "100%" }}
            src={banner11}
            preview={false}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%" }}>
          <ImageStyled
            style={{ height: "100px", width: "100%" }}
            src={banner11}
            preview={false}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%" }}>
          <ImageStyled
            style={{ height: "100px", width: "100%" }}
            src={banner11}
            preview={false}
          />
        </SwiperSlide>
      </SwiperStyled>
    </>
  );
};

const SwiperStyled = styled(Swiper)`
  & .swiper-slide {
    width: 100% !important;
    & .ant-image {
      width: 100%;
    }
  }
`;
const ImageStyled = styled(Image)`
  & .css-dev-only-do-not-override-3mqfnx {
    width: 100% !important;
  }
`;

export default SliderComponent;
