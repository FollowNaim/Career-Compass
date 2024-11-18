import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtons from "../swiper-btns/SwiperButtons";
import SingleSlide from "./SingleSlide";

const Testimonials = ({ children }) => {
  // it took almost 3hr+ to make this happen. was frustrated but took challange. and here it is now.

  const nextRef = useRef();
  const prevRef = useRef();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-semibold text-4xl text-primary text-center">
          See What Our <span className="text-blue-600">Clients Say</span>
        </h2>
        <p className="text-secondary-foreground py-4  ">
          Real stories from professionals who’ve trusted us to guide their
          career journey
        </p>
      </div>
      <div className="grid grid-cols-12 mb-14">
        <div className="col-span-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <span className="text-sm text-gray-500 font-medium mb-4 block">
                Testimonial
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
                23k+ Customers gave their{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
                  Feedback
                </span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-10 pt-10">
                <button
                  onClick={() => prevRef.current.click()}
                  id="slider-button-left"
                  className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
                  data-carousel-prev=""
                  tabIndex="0"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-105257d9016105c173"
                >
                  <svg
                    className="h-6 w-6 text-indigo-600 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => nextRef.current.click()}
                  id="slider-button-right"
                  className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
                  data-carousel-next=""
                  tabIndex="0"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-105257d9016105c173"
                >
                  <svg
                    className="h-6 w-6 text-indigo-600 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <Swiper
            slidesPerView={2}
            spaceBetween={28}
            navigation={true}
            autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
            modules={[Navigation, Autoplay]}
          >
            <div>
              <SwiperSlide className="">
                <SingleSlide
                  name={"Sophia Carter"}
                  img={
                    "https://media.istockphoto.com/id/695249686/photo/portrait-of-smiling-young-businesswoman-in-office.jpg?s=612x612&w=0&k=20&c=2ADGJeB4IkaHz--9lF9dRSUw2f5011cSmv-pVz5Z8MA="
                  }
                  text={
                    "Amazing experience! The counselor was incredibly supportive and provided actionable advice that truly helped me. Highly recommend!"
                  }
                  designation={"BrightMedia Inc."}
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <SingleSlide
                  name={"James Harrison"}
                  text={
                    "Great service overall. The sessions were well-structured and personalized to my needs. Only a bit of delay in scheduling."
                  }
                  img={
                    "https://img.freepik.com/premium-photo/business-man-modern-office-black-man-smiling-small-business-owner-executive-sales_660230-25091.jpg"
                  }
                  designation={"TechNova Solutions"}
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <SingleSlide
                  name={"Emily Brooks"}
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblHyJgSCNkoE-jZFd6zOQlntrw-JqnP4Jzg&s"
                  }
                  text={
                    "Very insightful! I feel more confident about my career direction. The tips on interview prep were especially helpful."
                  }
                  designation={"PeopleFirst HR"}
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <SingleSlide
                  name={"Michael Taylor"}
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nMxLVjLc63y8VqEF3O_kMqHNdEgNEyxdUg&s"
                  }
                  text={
                    "The service was good, but I wish there were more time for Q&A during the session. Otherwise, very professional!"
                  }
                  designation={"WealthPro Advisors"}
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <SingleSlide
                  name={"Olivia Martin"}
                  img={
                    "https://media.istockphoto.com/id/1333520756/photo/cheerful-small-business-partners-in-restaurant.jpg?s=612x612&w=0&k=20&c=0_gQdHzc3xOftlgKNDPGftqTjoDC4oB30pF5AdYiH6k="
                  }
                  text={
                    "Absolutely loved it! The counselor went above and beyond to address my concerns. Will definitely book again."
                  }
                  designation={"CreateWorks Studio"}
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <SingleSlide
                  name={"Dana"}
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWh4_P99mrkurSO5UIIpswxWWGG5PBi2r7qw&s"
                  }
                  text={
                    "The session was engaging and informative. The strategies provided for job searching are already showing results!"
                  }
                  designation={"InnovateNow Labs"}
                />
              </SwiperSlide>
            </div>

            <SwiperButtons nextRef={nextRef} prevRef={prevRef} />
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
