import { useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import useAuthContext from "../../hooks/useAuthContext";
import HandleJobUpdate from "./HandleJobUpdate";
import HandleJobDelete from "./HandleJobDelete";
import Swal from "sweetalert2";

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

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        const fetchDelete = async () => {
          try {
            const response = await axiosInstance.delete(`/deleteJob/${id}`);
            console.log(response.data);

            if (response.data.deletedCount > 0) {
              Swal.fire("Delete success");
              const remainingJob = myPostedJobs.filter(
                postedJobs => postedJobs._id !== id
              );
              setMyPostedJobs(remainingJob);
            }
          } catch (error) {
            console.log(error);
            Swal.fire(
              "Error",
              "There was an error deleting the file.",
              "error"
            );
          }
        };
        fetchDelete();
      }
    });
  };

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
              <HandleJobUpdate myPostedJob={myPostedJob}></HandleJobUpdate>
              <HandleJobDelete
                myPostedJob={myPostedJob}
                handleDelete={handleDelete}
              ></HandleJobDelete>
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
