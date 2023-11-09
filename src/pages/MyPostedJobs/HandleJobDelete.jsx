import PropTypes from "prop-types";
const HandleJobDelete = ({ handleDelete, myPostedJob }) => {
  console.log(myPostedJob);
  const { _id } = myPostedJob;
  return (
    <div>
      <button
        onClick={() => handleDelete(_id)}
        className=' center rounded-lg bg-red-600 text-white py-3 px-4 capitalize shadow-md shadow-red-500/20 transition-all  hover:shadow-red-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
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
