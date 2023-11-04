import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CarCarousel = () => {
  const [carCarousel, setCarCarousel] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {

    axiosSecure.get("/carCarousel")
    .then(function (response) {
      console.log(response);
      setCarCarousel(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [axiosSecure]);

  return (
    <div className="p-4">
      <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         coverflowEffect={{
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: true,
         }}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectCoverflow]}
        className="mySwiper"
        loop={true} // Enable infinite loop
        breakpoints={{
          // When window width is >= 992px (lg devices)
          992: {
            slidesPerView: 3,
          },
          // When window width is >= 768px (md devices)
          768: {
            slidesPerView: 3,
          },
          // When window width is < 768px (sm devices)
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {carCarousel.map((client, index) => (
          <SwiperSlide key={index}>
            <Carousel client={client} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarCarousel;
