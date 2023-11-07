import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const MyBids = () => {
  const [bidedJobs, setBidedJobs] = useState([]);
  const axiosInstance = useAxiosInstance();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBidedJobs = async () => {
      try {
        const response = await axiosInstance.get("/myBids");
        setBidedJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBidedJobs();
  }, [axiosInstance]);
  console.log(bidedJobs);

  return (
    <div className='my-20'>
      <div className='overflow-x-auto'>
        <table className='table table-md'>
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bidedJobs.map((job, i) => (
              <tr key={job._id}>
                <th>{i + 1}</th>
                <td>{job?.title}</td>
                <td>{job.userEmail}</td>
                <td>{job.applicationDeadline}</td>
                <td>pending</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
