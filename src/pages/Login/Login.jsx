import { Link, useLocation, useNavigate } from "react-router-dom";
import wavingHand from "../../assets/waving-hand-svgrepo-com.svg";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/login_image.svg";
import useAuthContext from "../../hooks/useAuthContext";
import { useState } from "react";

const Login = () => {
  document.title = "IT-Quester | Login";
  const [error, setError] = useState(null);
  const { userLogin, googleLogin } = useAuthContext();
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

  const handleGooglePopup = () => {
    googleLogin()
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div className='p-2 flex flex-col-reverse md:flex-row  items-center my-20'>
      <div className='md:w-1/2 hero hero-content'>
        <div className='card '>
          <div className='flex flex-col w-full'>
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
              <button
                onClick={handleGooglePopup}
                className='btn btn-block rounded-md overflow-hidden'
              >
                <FcGoogle className='text-xl' /> Continue with Google
              </button>
            </div>
            <div>
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
                  <button type='submit' className='py-3 bg-teal-300 font-bold'>
                    Login
                  </button>
                </div>
                <div className='form-control mt-3'>
                  <p>
                    Do not have an account?
                    <Link
                      to='/register'
                      className='underline hover:font-bold ml-1'
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img
        className='md:w-1/2 h-[400px] object-cover'
        src={loginImage}
        alt=''
      />
    </div>
  );
};

export default Login;
