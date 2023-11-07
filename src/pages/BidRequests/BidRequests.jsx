import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const BidRequests = () => {
  const [bidRequest, setBidRequest] = useState([]);
  const axiosInstance = useAxiosInstance();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axiosInstance.get(
          `/bidRequests?email=${user?.email}`
        );
        setBidRequest(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBids();
  }, [axiosInstance, user?.email]);
  console.log(bidRequest);

  const handleAcceptBidRequest = async id => {
    try {
      const response = await axiosInstance.patch(`/statusAccept/${id}`, {
        status: "accepted",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRejectBidRequest = async id => {
    try {
      const response = await axiosInstance.patch(`/statusReject/${id}`, {
        status: "rejected",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className='my-20'>
        <div className='overflow-x-auto'>
          <table className='table table-md'>
            <thead>
              <tr>
                <th></th>
                <th>Job title</th>
                <th>Applicant email</th>
                <th>Expected salary</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bidRequest.map((bid, i) => (
                <tr key={bid._id}>
                  <th>{i + 1}</th>
                  <td>{bid?.title}</td>
                  <td>{bid.userEmail}</td>
                  <td>${bid.amount}</td>
                  <td>{bid.applicationDeadline}</td>
                  <td className='text-red-500'>
                    {bid.status === "accepted" ? (
                      "Accepted"
                    ) : bid.status === "rejected" ? (
                      "Rejected"
                    ) : (
                      <button
                        onClick={() => handleAcceptBidRequest(bid._id)}
                        className='btn btn-sm'
                      >
                        Accept
                      </button>
                    )}
                  </td>
                  <td>
                    {bid.status === "accepted" ||
                    bid.status === "rejected" ? null : ( // Hide buttons when status is accepted or rejected
                      <button
                        onClick={() => handleRejectBidRequest(bid._id)}
                        className='btn btn-sm'
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidRequests;
