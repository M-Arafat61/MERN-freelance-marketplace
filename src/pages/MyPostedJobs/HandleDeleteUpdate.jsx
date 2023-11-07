import { Link } from "react-router-dom";

const HandleDeleteUpdate = () => {
  return (
    <div>
      <Link>
        <button className='flex flex-row items-center text-start text-lg btn btn-warning rounded-lg'>
          Delete job
        </button>
      </Link>
    </div>
  );
};

export default HandleDeleteUpdate;
