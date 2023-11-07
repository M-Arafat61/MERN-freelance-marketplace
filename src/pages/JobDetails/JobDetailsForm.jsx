import useAuthContext from "../../hooks/useAuthContext";
import PropTypes from "prop-types";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const JobDetailsForm = ({ title, email }) => {
  const { user } = useAuthContext();

  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();

  const handleJobApply = async e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const amount = form.get("amount");
    const applicationDeadline = form.get("date");
    const userEmail = form.get("userEmail");
    const employeeEmail = form.get("employeeEmail");

    const jobData = {
      title,
      amount,
      applicationDeadline,
      userEmail,
      employeeEmail,
    };
    try {
      const response = await axiosInstance.post("/appliedJobs", jobData);
      console.log(response);
      toast.success(`Successfully applied for ${title}`);
      navigate("/myBids");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='card flex-shrink-0 w-full '>
        <form onSubmit={handleJobApply}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your expected salary</span>
            </label>
            <input
              type='number'
              name='amount'
              //   placeholder='amount'
              className='input input-bordered'
              max={90000}
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Job deadline</span>
            </label>

            <input
              type='date'
              name='date'
              className='input input-bordered'
              required
              id=''
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Applicant email</span>
            </label>
            <input
              type='email'
              name='userEmail'
              defaultValue={user?.email}
              placeholder='email'
              className='input input-bordered'
              required
              readOnly
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Employer email</span>
            </label>
            <input
              type='email'
              name='employeeEmail'
              defaultValue={email}
              placeholder='email'
              className='input input-bordered'
              required
              readOnly
            />
          </div>

          <div className='form-control mt-6'>
            <button
              className='capitalize btn btn-warning rounded-md overflow-hidden input input-bordered'
              type='submit'
              disabled={user?.email === email}
            >
              Apply/Bid Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
JobDetailsForm.propTypes = {
  email: PropTypes.string,
  title: PropTypes.string,
};
export default JobDetailsForm;
