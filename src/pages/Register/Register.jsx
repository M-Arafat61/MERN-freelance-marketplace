import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { profileUpdate, createUser } = useAuthContext();
  const navigate = useNavigate();

  const handleRegistration = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(name, photo, password, email);

    createUser(email, password)
      .then(() => {
        profileUpdate(name, photo).then(() => {
          toast.success("Account created successfully");
          navigate("/");
        });
        e.target.reset;
      })
      .catch(err => {
        return toast.error(`${err.message}`);
      });
  };
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col w-full md:w-1/2'>
        <div className='text-start w-full'>
          <h1 className='text-5xl font-bold'>Sign up</h1>
          <p className='py-6'>
            Please enter your info below to create account and get started with
            us.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full '>
          <form onSubmit={handleRegistration}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='full name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input
                type='text'
                name='photo'
                placeholder='photo url'
                className='input input-bordered'
                required
              />
            </div>
            <div className='flex justify-between w-full gap-2'>
              <div className='form-control mt-6 w-1/2'>
                <button
                  type='reset'
                  className='py-3 bg-yellow-200 font-bold w-full'
                >
                  Cancel
                </button>
              </div>
              <div className='form-control mt-6 w-1/2'>
                <button
                  type='submit'
                  className='py-3 bg-teal-200 font-bold w-full'
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
          <div className='form-control mt-3'>
            <p>
              Already have an account?
              <Link to='/login' className='underline hover:font-bold ml-1'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
