import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from "/assets/slider1.jpg";
import slider3 from "/assets/slider2.jpg";
import slider2 from "/assets/slider3.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper z-0'
      >
        <SwiperSlide className='relative'>
          <div className='absolute border w-full h-full flex items-end justify-end p-5'>
            <div className='bg-black p-2 md:px-8 md:py-5 opacity-70 flex flex-col justify-center items-center'>
              <h1 className='animate__animated animate__flash text-center text-white text-2xl md:text-5xl lg:text-8xl md:mb-3'>
                Seize the moment!
              </h1>
              <p className='text-white text-base lg:text-2xl text-center mb-3'>
                Save 15% or more when you book and stay before October 1, 2024
              </p>
              <button className='px-2 md:px-4 py-1 md:py-2 rounded-md bg-[#006CE4] text-white text-base md:text-2xl font-semibold text-center'>
                Find Gateway Deals
              </button>
            </div>
          </div>
          <img className='w-full h-[300px] lg:h-[600px]' src={slider1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <div className='absolute border w-full h-full flex items-end justify-end p-5'>
            <div className='bg-black p-2 md:px-8 md:py-5 opacity-70 flex flex-col justify-center items-center'>
              <h1 className='animate__animated animate__flash text-center text-white text-2xl md:text-5xl lg:text-8xl md:mb-3'>
                Seize the moment!
              </h1>
              <p className='text-white text-base lg:text-2xl text-center mb-3'>
                Save 15% or more when you book and stay before October 1, 2024
              </p>
              <button className='px-2 md:px-4 py-1 md:py-2 rounded-md bg-[#006CE4] text-white text-base md:text-2xl font-semibold text-center'>
                Find Gateway Deals
              </button>
            </div>
          </div>
          <img className='w-full h-[300px] lg:h-[600px]' src={slider2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <div className='absolute border w-full h-full flex items-end justify-end p-5'>
            <div className='bg-black p-2 md:px-8 md:py-5 opacity-70 flex flex-col justify-center items-center'>
              <h1 className='animate__animated animate__flash text-center text-white text-2xl md:text-5xl lg:text-8xl md:mb-3'>
                Seize the moment!
              </h1>
              <p className='text-white text-base lg:text-2xl text-center mb-3'>
                Save 15% or more when you book and stay before October 1, 2024
              </p>
              <button className='px-2 md:px-4 py-1 md:py-2 rounded-md bg-[#006CE4] text-white text-base md:text-2xl font-semibold text-center'>
                Find Gateway Deals
              </button>
            </div>
          </div>
          <img className='w-full h-[300px] lg:h-[600px]' src={slider3} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
