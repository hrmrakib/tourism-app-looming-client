import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import darkimg from "/assets/dark.png";
import lightimg from "/assets/light.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../../Contexts/AuthContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    applyTheme();
  }, [darkMode]);

  function applyTheme() {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-tourists-spot'>All Tourists Spot </NavLink>
      </li>
      <li>
        <NavLink to='/add'>Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to='/my-list'>My List</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut();
  };
  return (
    <nav className='pb-4 py-1 md:w-[88%] mx-auto bg-white dark:bg-gray-900'>
      <Tooltip id='my-tooltip' />

      <div className='navbar bg-white dark:bg-gray-900'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow text-gray-950 dark:text-white rounded-box w-52 *:text-lg'
            >
              {navLinks}
            </ul>
          </div>

          <Link
            to='/'
            className='md:text-2xl font-bold text-gray-950 dark:text-white'
          >
            Looming
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 *:text-lg text-gray-950 dark:text-white'>
            {navLinks}
          </ul>
        </div>
        <div className='navbar-end'>
          <div className='mr-8 form-control'>
            <label className='cursor-pointer label'>
              <input
                type='checkbox'
                className='toggle-checkbox checkbox checkbox-secondary'
                id='toggle'
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label htmlFor='toggle' className='toggle-label'>
                <span className='toggle-inner'></span>
                <span className='toggle-switch'></span>
              </label>
              <span className='toggle-text ml-1'>
                <img
                  className='size-10'
                  src={darkMode ? lightimg : darkimg}
                  alt=''
                />
              </span>
            </label>
          </div>
          {user ? (
            <>
              {/* <Link to='/update-profile'> */}
              <img
                className='size-12 rounded-full mr-3 cursor-pointer'
                data-tooltip-id='my-tooltip'
                data-tooltip-content={user.displayName}
                data-tooltip-place='left'
                src={user.photoURL}
                alt='user'
              />
              {/* </Link> */}
              <button
                className='btn btn-outline btn-warning'
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to='/login'
              className='px-3 py-2 bg-[#FF497C] hover:bg-[#ab3154] rounded text-white font-semibold'
            >
              Login
            </Link>
          )}
        </div>

        <Tooltip anchorSelect='.my-anchor-element' place='bottom'>
          {user && user.displayName}
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;
