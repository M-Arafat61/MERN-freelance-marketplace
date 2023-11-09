import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const BidRequests = () => {
  document.title = "IT-Quester | Bid Requests";
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
    <div className=' mx-auto max-w-7xl p-2 '>
      <div className='my-20'>
        <table className='m-auto table-xs md:table-md'>
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>Applicant email</th>
              <th>Expected amount</th>
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
                <td className={bid.status ? "text-emerald-500" : ""}>
                  {bid.status}
                </td>

                <td>
                  {(bid.status === "accepted" && (
                    <>
                      <p>in progress</p>
                      <ProgressBar
                        filledBackground='linear-gradient(to right, #ffd966 50%, #3DB8D1  100%)'
                        percent={65}
                      />
                    </>
                  )) ||
                    (bid.status === "complete" && (
                      <>
                        <p>completed</p>
                        <ProgressBar
                          filledBackground='linear-gradient(to right, #8FFFFF 50%, #3DB8D1  100%)'
                          percent={100}
                        />
                      </>
                    ))}
                  <button
                    onClick={() => handleAcceptBidRequest(bid._id)}
                    className={
                      bid.status
                        ? "hidden"
                        : "center rounded-l-2xl  btn btn-sm capitalize shadow-md  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    }
                  >
                    Accept
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleRejectBidRequest(bid._id)}
                    className={
                      bid.status
                        ? "hidden"
                        : "center rounded-l-2xl bg-teal-400 btn-sm capitalize shadow-md shadow-blue-500/20 transition-all font-bold text-white  hover:shadow-teal-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    }
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
  );
};

export default BidRequests;
