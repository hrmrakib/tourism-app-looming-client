import { useTypewriter } from "react-simple-typewriter";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { baseURL } from "../utilities/url";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Life", "Moment", "Day"],
    loop: 0,
  });

  useEffect(() => {
    document.title = "Looming | All Tourist Spot";
  }, []);

  return (
    <div className=''>
      <p className='text-lg text-black dark:text-white'>
        Enjoy your <span className='text-blue-500 font-semibold'>{text}</span>!
      </p>
    </div>
  );
};

const AllTouristSpot = () => {
  const [allTouristSpot, setAllTouristSpot] = useState([]);
  const [displayAllTouristSpot, setDisplayAllTouristSpot] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}/allspot`)
      .then((res) => res.json())
      .then((data) => {
        setAllTouristSpot(data);
        setLoading(false);
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

  if (loading) {
    return (
      <div className='bg-white dark:bg-gray-900 flex items-center justify-center h-screen w-full'>
        <div className='bg-gray-600 size-16 rounded-full flex items-center justify-center'>
          <span className='loading loading-spinner loading-lg text-center text-white'></span>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-gray-900 md:py-20 pb-20 '>
      <div className='w-[80%] mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <MyComponent />
          </div>
          <div className='dropdown dropdown-hover'>
            <div
              tabIndex={0}
              role='button'
              className='m-1 w-full mt-3 px-3 py-2 bg-[#fd2d68] hover:bg-[#f21f5b] rounded text-white font-semibold'
            >
              Cost
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max'
            >
              <li onClick={sortAscending}>
                <a className='text-gray-900'>Lowest to heighest</a>
              </li>
              <li onClick={sortDescending}>
                <a className='text-gray-900'>Heighest to lowest</a>
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
                      <button className='w-full mt-3 px-3 py-2 bg-[#ec3fee] hover:bg-[#af11c1] rounded text-white font-semibold'>
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
