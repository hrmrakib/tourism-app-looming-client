import img from "/assets/testimonial.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const img1 =
  "https://i.ibb.co/bNW2C0Q/young-man-suit-glasses-standing-with-crossed-arms-looking-confident.jpg";
const img2 =
  "https://i.ibb.co/hKW83Vk/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-sm.jpg";
const img3 =
  "https://i.ibb.co/MgzXcgL/businessman-black-suit-with-tie-posing.jpg";

const Review = () => {
  return (
    <div className='py-24 bg-white dark:bg-gray-900 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div>
        <img className='h-52 md:h-96' src={img} alt='' />
      </div>
      <div>
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
          <SwiperSlide>
            <div>
              <h2 className='text-3xl text-gray-950 dark:text-white md:text-4xl font-bold mb-3'>
                Quality Service
              </h2>
              <div className='flex items-center gap-2 *:text-orange-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className='lg:border-b-2 pb-5 mt-5'>
                To take trivial example which of ever undertakes laborious
                physical exercise, except to obtain some advantage from but who
                has any right to find fault with man who chooses to enjoy.
              </p>
              <div className='flex items-center gap-3 mt-8'>
                <img className='size-16 rounded-full ' src={img1} alt='' />
                <div>
                  <h2 className='text-2xl font-bold'>Kahlito Volp</h2>
                  <p>Marketing Officer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h2 className='text-3xl text-gray-950 dark:text-white md:text-4xl font-bold mb-3'>
                Quality Service
              </h2>
              <div className='flex items-center gap-2 *:text-orange-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className='lg:border-b-2 pb-5 mt-5'>
                To take trivial example which of ever undertakes laborious
                physical exercise, except to obtain some advantage from but who
                has any right to find fault with man who chooses to enjoy.
              </p>
              <div className='flex items-center gap-3 mt-8'>
                <img className='size-16 rounded-full ' src={img2} alt='' />
                <div>
                  <h2 className='text-2xl font-bold'>Faiul Simon</h2>
                  <p>Operating Officer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h2 className='text-3xl text-gray-950 dark:text-white md:text-4xl font-bold mb-3'>
                Quality Service
              </h2>
              <div className='flex items-center gap-2 *:text-orange-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className='lg:border-b-2 pb-5 mt-5'>
                To take trivial example which of ever undertakes laborious
                physical exercise, except to obtain some advantage from but who
                has any right to find fault with man who chooses to enjoy.
              </p>
              <div className='flex items-center gap-3 mt-8'>
                <img className='size-16 rounded-full ' src={img3} alt='' />
                <div>
                  <h2 className='text-2xl font-bold'>Rehel Qazi</h2>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
