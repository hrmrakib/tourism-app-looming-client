import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className='bg-white flex items-center justify-center h-screen'>
        <div className='bg-gray-600 size-16 rounded-full flex items-center justify-center'>
          <span className='loading loading-spinner loading-lg text-center text-white'></span>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;
