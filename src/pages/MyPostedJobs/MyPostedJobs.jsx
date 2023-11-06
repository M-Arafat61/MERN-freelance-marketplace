import { useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const MyPostedJobs = () => {
  const [myPostedJobs, setMyPostedJobs] = useState([]);
  const axiosInstance = useAxiosInstance();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchMyPostedJobData = async () => {
      try {
        const response = await axiosInstance.get(
          `/myPostedJobs?email=${user?.email}`
        );
        setMyPostedJobs(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyPostedJobData();
  }, [axiosInstance, user?.email]);
  return (
    <div className='grid grid-cols-2 gap-5 my-20'>
      {myPostedJobs.length > 0 ? (
        myPostedJobs.map(myPostedJob => (
          <div
            className='border hover:border-amber-500 p-10 w-full flex flex-col  space-y-2 rounded-lg overflow-hidden'
            key={myPostedJob._id}
          >
            <p className='text-xl font-semibold'>{myPostedJob.title}</p>
            <div className='flex justify-start gap-10 items-center italic'>
              <p>
                Salary range: ${myPostedJob.minimumPrice}- $
                {myPostedJob.maximumPrice}
                (yearly)
              </p>

              <p>Deadline: {myPostedJob.deadline}</p>
            </div>

            <p>{myPostedJob.description}</p>

            <div className='flex justify-evenly '>
              <Link>
                <button className='flex flex-row items-center text-start text-lg btn btn-success rounded-lg'>
                  Update job
                </button>
              </Link>
              <Link>
                <button className='flex flex-row items-center text-start text-lg btn btn-warning rounded-lg'>
                  Delete job
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className='text-2xl font-medium text-center col-span-2'>
          You do not have any posted jobs. <br /> To se your posted jobs, please
          Add job
        </p>
      )}
    </div>
  );
};

export default MyPostedJobs;
