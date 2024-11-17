import slide2 from "@/assets/slides-2.jpg";
import slide1 from "@/assets/slides-1.jpg";
import slide3 from "@/assets/slides-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import "swiper/css/effect-fade";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import Slider from "./Slider";

const Sliders = () => {
  return (
    <Swiper
      effect="Creative"
      navigation={true}
      modules={[Navigation, Autoplay, EffectCreative]}
      className="mySwiper"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      scrollbar={{
        draggable: true,
      }}
    >
      <SwiperSlide className="!w-full">
        <Slider
          title={"Shape Your Career "}
          bold={"Define Your Success"}
          desc={
            "Take the first step to success with personalized resources and actionable insights to achieve your dreams."
          }
          btnText={"Start Your Journey"}
          btnIcon={"🚀"}
          imgUrl={slide2}
        />
      </SwiperSlide>
      <SwiperSlide className="!w-full">
        <Slider
          title={"Unlock Your Potential, "}
          bold={"Achieve Your Dreams"}
          desc={
            "Personalized career guidance to help you uncover your strengths, navigate your options, and achieve the professional life you’ve always envisioned."
          }
          btnText={"Let’s Make It Happen"}
          imgUrl={slide1}
          btnIcon={"✨"}
        />
      </SwiperSlide>
      <SwiperSlide className="!w-full">
        <Slider
          title={"Your Future, "}
          bold={"Our Mission "}
          desc={
            "Partner with us to explore career opportunities, gain valuable insights, and take confident steps toward a brighter, more fulfilling future."
          }
          btnText={"Join the Success Path"}
          imgUrl={slide3}
          btnIcon={"🎯"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
