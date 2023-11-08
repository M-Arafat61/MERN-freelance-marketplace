import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HandleJobUpdate = ({ myPostedJob }) => {
  const { _id } = myPostedJob;
  return (
    <div className=''>
      <Link to={`/updateJobInfo/${_id}`}>
        <button className='btn capitalize rounded-lg'>Update Job</button>
      </Link>
    </div>
  );
};

HandleJobUpdate.propTypes = {
  myPostedJob: PropTypes.object,
};

export default HandleJobUpdate;
