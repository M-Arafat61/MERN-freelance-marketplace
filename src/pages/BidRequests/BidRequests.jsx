import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

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
      if (response.data.modifiedCount > 0) {
        const remaining = bidRequest.filter(bids => bids._id !== id);
        const updated = bidRequest.find(bids => bids._id === id);
        updated.status = "accepted";
        const newBidRequest = [updated, ...remaining];
        setBidRequest(newBidRequest);
      }
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
      if (response.data.modifiedCount > 0) {
        const remaining = bidRequest.filter(bids => bids._id !== id);
        const updated = bidRequest.find(bids => bids._id === id);
        updated.status = "rejected";
        const newBidRequest = [updated, ...remaining];
        setBidRequest(newBidRequest);
      }
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
                <th></th>
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
                  <td
                    className={bid.status === "accepted" && "text-emerald-500"}
                  >
                    {bid.status}
                  </td>

                  <td>
                    {(bid.status === "accepted" && (
                      <>
                        <p>in progress</p>
                        <ProgressBar
                          filledBackground='linear-gradient(to right, #ffbb00 0%, #ff8800 50%, #ff5500 100%)'
                          percent={45}
                        />
                      </>
                    )) ||
                      (bid.status === "complete" && (
                        <>
                          <p>completed</p>
                          <ProgressBar
                            filledBackground='linear-gradient(to right, #ffd966 50%, #ffa726 100%)'
                            percent={100}
                          />
                        </>
                      ))}
                    <button
                      onClick={() => handleAcceptBidRequest(bid._id)}
                      className={bid.status ? "hidden" : "btn btn-sm"}
                    >
                      Accept
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => handleRejectBidRequest(bid._id)}
                      className={bid.status ? "hidden" : "btn btn-sm"}
                    >
                      Reject
                    </button>
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
