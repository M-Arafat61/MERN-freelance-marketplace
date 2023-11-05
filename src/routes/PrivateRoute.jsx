import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  if (loading) {
    return <progress className='progress w-56'></progress>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to='/login' replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
