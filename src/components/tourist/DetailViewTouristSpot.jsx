import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { TbCalendarClock } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";

const DetailViewTouristSpot = () => {
  const loadedSpot = useLoaderData();
  console.log(loadedSpot);
  return (
    <div className='bg-white'>
      <div>
        <div className='w-[80%] mx-auto relative border'>
          <div className='absolute border w-full h-full flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center bg-gray-900 px-6 py-3 rounded-md opacity-70'>
              <h2 className='text-gray-100 text-5xl font-bold mb-3'>
                Explore The Worlds
              </h2>
              <p className='text-gray-200 text-2xl font-bold'>
                People Don’t Take, Trips Take People
              </p>
            </div>
          </div>
          <img
            className='w-full h-96 object-fill'
            src={loadedSpot?.photoURL}
            alt=''
          />
        </div>
        <div className='bg-[#F3F8F6] py-16'>
          <div className='w-[80%] mx-auto md:flex justify-between'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                {loadedSpot?.spotName}
              </h2>
              <p className='flex items-center text-lg font-semibold text-gray-700 mb-2'>
                <FaLocationDot className='text-xl text-gray-400' />{" "}
                {loadedSpot?.location}, {loadedSpot?.country}
              </p>
              <p className='text-gray-800 max-w-72'>
                {loadedSpot?.description}
              </p>
            </div>
            <div className='flex items-center gap-10'>
              <div className='flex items-center gap-3'>
                <FcMoneyTransfer className='text-4xl' />
                <p className='flex flex-col'>
                  <span className='text-base text-gray-800'>From</span>
                  <span className='text-lg font-semibold text-gray-950'>
                    ${loadedSpot?.averageCost}
                  </span>
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <TbCalendarClock className='text-4xl' />
                <p className='flex flex-col'>
                  <span className='text-base text-gray-800'>Duration</span>
                  <span className='text-lg font-semibold text-gray-950'>
                    ${loadedSpot?.travelTime}
                  </span>
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <TiWeatherPartlySunny className='text-4xl' />
                <p className='flex flex-col'>
                  <span className='text-base text-gray-800'>Season</span>
                  <span className='text-lg font-semibold text-gray-950'>
                    {loadedSpot?.seasonality}
                  </span>
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <FaPeopleGroup className='text-4xl' />
                <p className='flex flex-col'>
                  <span className='text-base text-gray-800'>
                    Visted Per Year
                  </span>
                  <span className='text-lg font-semibold text-gray-950'>
                    {loadedSpot?.totaVisitorsPerYear}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailViewTouristSpot;
