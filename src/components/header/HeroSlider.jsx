import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const slider1 = "https://i.ibb.co/VJ0f0ZY/slider1.jpg";
  const slider2 = "https://i.ibb.co/By93knN/slider2.jpg";
  const slider3 = "https://i.ibb.co/xYYbrrH/slider3.jpg";

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper z-0'
      >
        <SwiperSlide className='relative'>
          <div className='absolute border w-full h-full flex items-center justify-center'>
            <div className='bg-black px-12 py-5 opacity-60'>
              <h1 className='animate__animated animate__flash text-center text-white text-2xl md:text-5xl lg:text-8xl mb-3'>
                Find Your Property
              </h1>
              <p className='text-white text-lg lg:text-2xl text-center'>
                Luxuries and Suitable Property for you
              </p>
            </div>
          </div>
          <img className='w-full lg:h-[600px]' src={slider1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='absolute border w-full h-full flex items-center justify-center'>
            <div className='bg-black px-12 py-5 opacity-60'>
              <h1 className='text-center text-white text-2xl md:text-5xl lg:text-8xl mb-3'>
                Find Your Property
              </h1>
              <p className='text-white text-lg lg:text-2xl text-center'>
                Luxuries and Suitable Property for you
              </p>
            </div>
          </div>
          <img className='w-full lg:h-[600px]' src={slider2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='absolute border w-full h-full flex items-center justify-center'>
            <div className='bg-black px-12 py-5 opacity-60'>
              <h1 className='text-center text-white text-2xl md:text-5xl lg:text-8xl mb-3'>
                Find Your Property
              </h1>
              <p className='text-white text-lg lg:text-2xl text-center'>
                Luxuries and Suitable Property for you
              </p>
            </div>
          </div>
          <img className='w-full lg:h-[600px]' src={slider3} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
