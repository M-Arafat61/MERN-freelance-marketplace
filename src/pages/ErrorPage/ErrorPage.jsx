import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/13315300_5203298.svg";
import { BiArrowBack } from "react-icons/bi";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='p-2 md:p-10'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <img className='w-1/2 mx-auto' src={errorImage} alt='' />
        <div className=''>
          <Link to='/'>
            <button className='btn btn-warning  rounded-lg overflow-hidden btn-lg font-bold'>
              <span className='text-3xl'>
                <BiArrowBack />
              </span>
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
