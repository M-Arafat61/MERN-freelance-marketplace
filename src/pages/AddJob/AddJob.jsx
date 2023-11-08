import useAuthContext from "../../hooks/useAuthContext";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const AddJob = () => {
  document.title = "Form to Add Job Info";
  const { user } = useAuthContext();

  const axiosInstance = useAxiosInstance();

  const handleAddJob = async e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const title = form.get("title");
    const deadline = form.get("date");
    const description = form.get("description");
    const category = form.get("category");
    const minimumPrice = form.get("minimumPrice");
    const maximumPrice = form.get("maximumPrice");
    const jobData = {
      email,
      title,
      deadline,
      description,
      minimumPrice,
      maximumPrice,
      category,
    };
    console.log(jobData);
    try {
      const response = await axiosInstance.post("/addJobs", jobData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col w-full md:w-1/2'>
        <div className='text-start w-full'>
          <h1 className='text-5xl font-bold'>Add Job</h1>
          <p className='py-6'>
            Please enter your info below to create account and get started with
            us.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full '>
          <form onSubmit={handleAddJob}>
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button
                className='btn btn-warning rounded-md overflow-hidden input input-bordered'
                type='submit'
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
