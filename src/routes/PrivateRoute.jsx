import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <span className='loading loading-spinner loading-lg text-center'></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;
