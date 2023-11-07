import PropTypes from "prop-types";
const HandleJobDelete = ({ handleDelete, myPostedJob }) => {
  console.log(myPostedJob);
  const { _id } = myPostedJob;
  return (
    <div>
      <button
        onClick={() => handleDelete(_id)}
        className='flex flex-row items-center text-start text-lg btn btn-warning rounded-lg'
      >
        Delete job
      </button>
    </div>
  );
};

HandleJobDelete.propTypes = {
  myPostedJob: PropTypes.object,
  handleDelete: PropTypes.func,
};
export default HandleJobDelete;
