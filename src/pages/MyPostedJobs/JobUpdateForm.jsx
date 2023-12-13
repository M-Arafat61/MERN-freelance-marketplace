import { useParams } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import toast from "react-hot-toast";

const JobUpdateForm = () => {
  document.title = "JobHub | Update Job";
  const { user } = useAuthContext();
  const { id } = useParams();
  const axiosInstance = useAxiosInstance();
  console.log(id);
  const handleJobUpdate = async e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const title = form.get("title");
    const deadline = form.get("date");
    const description = form.get("description");
    const category = form.get("category");
    const minimumPrice = form.get("minimumPrice");
    const maximumPrice = form.get("maximumPrice");
    const updatedJobInfo = {
      email,
      title,
      deadline,
      description,
      minimumPrice,
      maximumPrice,
      category,
    };
    try {
      const response = await axiosInstance.patch(
        `/updateJob/${id}`,
        updatedJobInfo
      );
      console.log(response);
      toast.success("Updates successful.");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col w-full md:w-1/2'>
        <div className='card flex-shrink-0 w-full '>
          <form onSubmit={handleJobUpdate}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                defaultValue={user?.email}
                placeholder='email'
                className='input input-bordered'
                readOnly
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Job title</span>
              </label>
              <input
                type='text'
                name='title'
                placeholder='job title'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Deadline</span>
              </label>

              <input
                type='date'
                name='date'
                className='input input-bordered'
                id=''
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Description</span>
              </label>
              <input
                type='text'
                name='description'
                placeholder='description'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='categories' className='label'>
                <span className='label-text'>Choose a category</span>
              </label>
              <select
                id='categories'
                name='category'
                className='input input-bordered'
              >
                <option value='web-development'>Web Development</option>
                <option value='digital-marketing'>Digital Marketing</option>
                <option value='graphics-design'>Graphics Design</option>
              </select>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Minimum price</span>
              </label>
              <input
                type='number'
                name='minimumPrice'
                placeholder='minimum price'
                className='input input-bordered'
                defaultValue={0}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'> Maximum price</span>
              </label>
              <input
                type='number'
                name='maximumPrice'
                placeholder='maximum price'
                className='input input-bordered'
                defaultValue={0}
              />
            </div>
            <div className='form-control mt-6'>
              <button
                className=' py-2 bg-teal-200 rounded-md capitalize overflow-hidden input input-bordered'
                type='submit'
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobUpdateForm;
