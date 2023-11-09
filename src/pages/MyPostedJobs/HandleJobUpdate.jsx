import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HandleJobUpdate = ({ myPostedJob }) => {
  const { _id } = myPostedJob;
  return (
    <div className=''>
      <Link to={`/updateJobInfo/${_id}`}>
        <button className='bg-teal-200 py-3 px-4 capitalize rounded-lg'>
          Update Job
        </button>
      </Link>
    </div>
  );
};

HandleJobUpdate.propTypes = {
  myPostedJob: PropTypes.object,
};

export default HandleJobUpdate;
