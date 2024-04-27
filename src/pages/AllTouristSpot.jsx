import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { baseURL } from "../utilities/url";
import { Link } from "react-router-dom";

const AllTouristSpot = () => {
  const [allTouristSpot, setAllTouristSpot] = useState([]);
  const [displayAllTouristSpot, setDisplayAllTouristSpot] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/allspot`)
      .then((res) => res.json())
      .then((data) => {
        setAllTouristSpot(data);
      });
  }, []);

  const sortAscending = () => {
    const sorted = [...allTouristSpot].sort((a, b) => {
      return a.averageCost - b.averageCost;
    });
    setDisplayAllTouristSpot(sorted);
  };

  const sortDescending = () => {
    const sorted = [...allTouristSpot].sort((a, b) => {
      return b.averageCost - a.averageCost;
    });
    setDisplayAllTouristSpot(sorted);
  };
  return (
    <div className='bg-white py-20'>
      <div className='w-[80%] mx-auto'>
        <div className='flex items-center justify-center'>
          <div className='dropdown dropdown-hover'>
            <div
              tabIndex={0}
              role='button'
              className='m-1 w-full mt-3 px-3 py-2 bg-[#FF497C] hover:bg-[#f3336a] rounded text-white font-semibold'
            >
              Cost
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max'
            >
              <li onClick={sortAscending}>
                <a className='text-gray-200'>Lowest to heighest</a>
              </li>
              <li onClick={sortDescending}>
                <a className='text-gray-200'>Heighest to lowest</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-16'>
          {(
            (displayAllTouristSpot.length && displayAllTouristSpot) ||
            allTouristSpot
          ).map((spot) => (
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
    </div>
  );
};

export default AllTouristSpot;
