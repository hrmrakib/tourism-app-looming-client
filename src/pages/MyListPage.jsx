import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { baseURL } from "../utilities/url";
import { Link } from "react-router-dom";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const MyListPage = () => {
  const [listedSpot, setListedSpot] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  useEffect(() => {
    fetch(`${baseURL}/allDataByEmail/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setListedSpot(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className='bg-white flex items-center justify-center h-screen w-full'>
        <div className='bg-gray-600 size-16 rounded-full flex items-center justify-center'>
          <span className='loading loading-spinner loading-lg text-center text-white'></span>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white'>
      <div className='w-[80%] mx-auto'>
        <div className='mb-12'>
          <div>
            <h2 className='text-center text-3xl text-gray-900 font-bold'>
              I have added the tourist spot!
            </h2>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-14'>
          {listedSpot.map((spot) => (
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
                <div className='flex items-center justify-between border-b-2 mb-2'>
                  <div>
                    <h2 className='text-xl font-bold mb-3 text-gray-950 dark:text-white'>
                      {spot.spotName}
                    </h2>
                    <div className='flex items-center gap-2 mb-3'>
                      <FaLocationDot className='text-green-500' />
                      <p>
                        {spot.location}, {spot.country}
                      </p>
                    </div>

                    <div className='flex items-center gap-2 pb-3'>
                      <RiMoneyDollarCircleFill className='text-green-500' />
                      <p>
                        From{" "}
                        <span className='text-orange-500 font-semibold'>
                          ${spot.averageCost}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <TiWeatherPartlySunny className='text-2xl' />
                    <p className='flex flex-col'>
                      <span className='text-sm text-gray-800'>Season</span>
                      <span className='font-semibold text-gray-950'>
                        {spot?.seasonality}
                      </span>
                    </p>
                  </div>
                </div>

                <p className='text-gray-700 min-h-14'>{spot.description}</p>

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

export default MyListPage;
