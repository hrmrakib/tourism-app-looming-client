import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../utilities/url";

const CountryTouristSpot = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/countryData`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center mb-16'>
        <h2 className='text-4xl font-bold mb-3 text-gray-950 dark:text-white'>
          Trending destinations
        </h2>
        <p className='text-gray-600 dark:text-gray-200 text-xl'>
          Most popular choices for travelers
        </p>
      </div>

      {/* country card */}

      <div className='grid lg:grid-cols-2 gap-14'>
        {countries.map((country) => (
          <Link
            key={country._id}
            to={`/specificCountry/${country.countryName}`}
          >
            <div className='relative cursor-pointer'>
              <div className=''>
                <div className='absolute w-full flex items-center gap-2 drop-shadow-xl shadow-slate-200 py-3 pl-4'>
                  <h2 className='text-white text-2xl font-bold text-shadow'>
                    {country.countryName}
                  </h2>
                  <img className='w-10 h-8' src={country.flagImage} alt='' />
                </div>
                <div className='absolute bottom-0 bg-[#00000037]'>
                  <p className=' text-white text-lg p-4'>
                    {country.description}
                  </p>
                </div>
              </div>
              <img
                className='h-72 w-full rounded-lg'
                src={country.image}
                alt=''
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryTouristSpot;
