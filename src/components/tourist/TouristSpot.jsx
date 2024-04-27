import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { baseURL } from "../../utilities/url";
import { Link } from "react-router-dom";

const TouristSpot = () => {
  const [sixTouristSpot, setSixTouristSpot] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/allspot`)
      .then((res) => res.json())
      .then((data) => {
        setSixTouristSpot(data);
      });
  }, []);

  return (
    <div className='my-24'>
      <div className='flex flex-col items-center'>
        <button className='bg-gray-100 px-4 py-2 text-green-500 text-lg font-semibold rounded-md'>
          Popular Tourist Spot
        </button>
        <h2 className='text-5xl text-gray-950 dark:text-white font-bold text-center max-w-2xl mt-7 leading-snug'>
          Visit & enjoy adventure life with full of dreams
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-16'>
        {sixTouristSpot.slice(0, 6).map((spot) => (
          <div key={spot._id}>
            <div className='relative shadow-lg z-0'>
              <img
                className='w-full h-64 rounded-xl'
                src={spot.photoURL}
                alt=''
              />
              <FaRegHeart className='absolute top-3 right-3 text-3xl bg-gray-700 text-white p-2 rounded-lg opacity-75' />
            </div>

            <div className='relative bg-white dark:bg-gray-900 text-gray-950 dark:text-white shadow-xl px-5 py-4 rounded-lg -mt-12 z-10'>
              <h2 className='text-xl font-bold mb-3 text-gray-950 dark:text-white'>
                {spot.spotName}
              </h2>
              <div className='flex items-center gap-2 mb-3'>
                <FaLocationDot className='text-green-500' />
                <p>
                  {spot.location}, {spot.country}
                </p>
              </div>
              <div className='flex items-center gap-2 pb-3 border-b-2'>
                <RiMoneyDollarCircleFill className='text-green-500' />
                <p>
                  From{" "}
                  <span className='text-orange-500 font-semibold'>
                    ${spot.averageCost}
                  </span>
                </p>
              </div>

              <div className='flex justify-between items-center mt-4'>
                <div>
                  <p className='flex items-center gap-2'>
                    <FaRegClock /> <span>{spot.travelTime}</span>
                  </p>
                </div>
                <div>
                  <Link to={`/tourspot-detail/${spot._id}`}>
                    <button className='w-full mt-3 px-3 py-2 bg-[#FF497C] hover:bg-[#ab3154] rounded text-white font-semibold'>
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristSpot;
