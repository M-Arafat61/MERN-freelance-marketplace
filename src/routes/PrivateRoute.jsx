import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import PropTypes from "prop-types";
import { RiseLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  if (loading) {
    return (
      <RiseLoader
        className='min-h-screen flex justify-center items-center'
        color='#36d7b7'
      />
    );
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
