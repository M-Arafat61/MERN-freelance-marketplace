import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import PropTypes from "prop-types";
import { RiseLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <RiseLoader className='' color='#36d7b7' />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
