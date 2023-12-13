import { useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

const MyBids = () => {
  document.title = "JobHub | Bided Jobs";
  const [bidedJobs, setBidedJobs] = useState([]);
  // const [filterStatus, setFilterStatus] = useState("all");
  // const [sortOrder, setSortOrder] = useState("asc");

  const axiosInstance = useAxiosInstance();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBidedJobs = async () => {
      try {
        const response = await axiosInstance.get(`/myBids/${user?.email}`);
        setBidedJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBidedJobs();
  }, [axiosInstance, user.email]);

  const handleCompleteJob = async id => {
    try {
      const response = await axiosInstance.patch(`/statusComplete/${id}`, {
        status: "complete",
      });
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        const remaining = bidedJobs.filter(bids => bids._id !== id);
        const updated = bidedJobs.find(bids => bids._id === id);
        updated.status = "complete";
        const newBidState = [updated, ...remaining];
        setBidedJobs(newBidState);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(bidedJobs);
  // const handleFilterChange = e => {
  //   setFilterStatus(e.target.value);
  // };
  // const handleSortOrderChange = e => {
  //   setSortOrder(e.target.value);
  // };
  // console.log(filterStatus);
  return (
    <div className=''>
      <div className='my-20  p-2 mx-auto max-w-7xl'>
        <div className='flex justify-end gap-10 items-start'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='statusFilter' className='text-xl font-semibold'>
              Filter by Status
            </label>
            <select
              id='statusFilter'
              // value={filterStatus}
              // onChange={handleFilterChange}
              className='select w-full max-w-xs'
            >
              <option value='all'>All</option>
              <option value='complete'>Complete</option>
              <option value='rejected'>Canceled</option>
              <option value='accepted'>In Progress</option>
              <option value='pending'>Pending</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 '>
            <label className='text-xl font-semibold' htmlFor='sortOrder'>
              Sort by
            </label>
            <select
              id='sortOrder'
              // value={sortOrder}
              // onChange={handleSortOrderChange}
            >
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </select>
          </div>
        </div>

        {bidedJobs.length > 0 ? (
          <table className='mx-auto table-xs md:table-lg'>
            <thead>
              <tr>
                <th></th>
                <th>Job title</th>
                <th>Applicant email</th>
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
                  <td className=''>
                    <p>
                      {job.status === "accepted"
                        ? "in progress"
                        : job.status === "rejected"
                        ? "canceled"
                        : job.status === "complete"
                        ? "complete"
                        : "Pending"}
                    </p>
                  </td>
                  <td>
                    {job.status === "accepted" && (
                      <button
                        onClick={() => {
                          console.log(job._id), handleCompleteJob(job._id);
                        }}
                        className='btn btn-sm capitalize rounded-l-2xl'
                      >
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='text-2xl text-center col-span-2 mt-28'>
            Please
            <Link to='/'>
              <span className='text-emerald-500'> Bid Now </span>
            </Link>
            to see Your Bids.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBids;
//
