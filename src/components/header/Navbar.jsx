import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../../Contexts/AuthContextProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-tourists-spot'>All Tourists Spot </NavLink>
      </li>
      <li>
        <NavLink to='/add-tourists-spot'>Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to='/my-list'>My List</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {};
  return (
    <nav className='mb-4 py-1 md:w-[88%] mx-auto'>
      <Tooltip id='my-tooltip' />

      <div className='navbar bg-base-100'>
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
              className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 *:text-lg'
            >
              {navLinks}
            </ul>
          </div>

          <Link to='/' className='md:text-2xl font-bold'>
            Looming
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 *:text-lg'>{navLinks}</ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <Link to='/update-profile'>
                <img
                  className='size-12 rounded-full mr-3'
                  data-tooltip-id='my-tooltip'
                  data-tooltip-content={user.displayName}
                  data-tooltip-place='left'
                  src={user.photoURL}
                  alt='user'
                />
              </Link>
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
