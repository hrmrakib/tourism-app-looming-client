import { MdOutlineSecurity } from "react-icons/md";
import img from "/assets/year-image.png";
import { FaWifi } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { FaBiking } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className='my-28 grid md:grid-cols-2 gap-16 items-center'>
      <div>
        <h2 className='text-3xl lg:text-5xl font-bold mb-8'>
          People why choose our travel adventure
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='flex gap-2'>
            <MdOutlineSecurity className='text-5xl text-green-400' />
            <div>
              <h2 className='text-2xl font-bold mb-2'>Best security</h2>
              <p className='text-gray-500'>
                We denounce with righteous indignation and dislike.
              </p>
            </div>
          </div>
          <div className='flex gap-2'>
            <FaWifi className='text-5xl text-green-400' />
            <div>
              <h2 className='text-2xl font-bold mb-2'>Free Internet</h2>
              <p className='text-gray-500'>
                We denounce with righteous indignation and dislike.
              </p>
            </div>
          </div>

          <div className='flex gap-2'>
            <MdSolarPower className='text-5xl text-green-400' />
            <div>
              <h2 className='text-2xl font-bold mb-2'>Solar energy</h2>
              <p className='text-gray-500'>
                We denounce with righteous indignation and dislike.
              </p>
            </div>
          </div>
          <div className='flex gap-2'>
            <FaBiking className='text-5xl text-green-400' />
            <div>
              <h2 className='text-2xl font-bold mb-2'>Mountain biking</h2>
              <p className='text-gray-500'>
                We denounce with righteous indignation and dislike.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className='h-52 md:h-96' src={img} alt='' />
      </div>
    </div>
  );
};

export default ChooseUs;
