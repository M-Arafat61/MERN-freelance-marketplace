import { Link, useLocation, useNavigate } from "react-router-dom";
import wavingHand from "../../assets/waving-hand-svgrepo-com.svg";
import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../hooks/useAuthContext";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(null);
  const { userLogin } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    userLogin(email, password)
      .then(res => {
        console.log(res.user);
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch(err => {
        console.error(err);
        setError("The email/password that you've entered is incorrect.");
      });
  };
  return (
    <div className='hero min-h-screen border border-red-500'>
      <div className='hero-content flex-col border border-green-500 w-full md:w-1/2'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Welcome back</h1>
          <p className='py-6'>
            Glad to see you again
            <span>
              <img className='w-6 inline-block' src={wavingHand} alt='' />
            </span>
            <br />
            Login to your account below
          </p>
        </div>
        <div className='card flex-shrink-0 w-full '>
          <Link>
            <button className='btn btn-block rounded-md overflow-hidden'>
              <FcGoogle className='text-xl' /> Continue with Google
            </button>
          </Link>
          <form onSubmit={handleLogIn}>
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
              <label className='label'>
                {error && <p className='text-red-500'>{error}</p>}
              </label>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-warning font-bold'>
                Login
              </button>
            </div>
            <div className='form-control mt-3'>
              <p>
                Do not have an account?
                <Link to='/register' className='underline hover:font-bold ml-1'>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
