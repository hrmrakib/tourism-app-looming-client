import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/header/Navbar";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Looming | Error";
  }, []);

  return (
    <>
      <Navbar />
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-orange-500 text-8xl font-extrabold'>
            4<span className='text-red-500'>0</span>4
          </h2>
          <h3 className='text-3xl font-semibold my-4'>OPPS! PAGE NOT FOUND!</h3>
          <p className='mb-4 max-w-96'>
            Sorry, the page you are looking for does not exists. If you think
            something is broken, report a problem.
          </p>
          <Link to='/'>
            <button
              type='button'
              className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md px-4 py-3 text-white text-xl font-bold'
            >
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
