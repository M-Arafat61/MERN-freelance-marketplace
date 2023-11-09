import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = () => {
  const { user, logOut } = useAuthContext();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user signed out");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className='max-w-7xl p-2 md:py-5 flex-grow gap-5 mx-auto'>
      <div className='flex  md:flex-col lg:flex-row items-center'>
        <div>
          <img
            className='w-52 md:w-36'
            src='https://i.ibb.co/C8C9BTp/it-quester.png'
            alt=''
          />
        </div>
        <p className='hidden md:flex text-xl font-bold ml-2'>ITQuester</p>
      </div>
      <div className='flex w-full justify-center items-center'>
        <div className=' flex-none hidden md:block'>
          <div className='flex items-center gap-4 justify-between'>
            {/* Navbar menu content here */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/addJob'
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              Add job
            </NavLink>
            <NavLink
              to='/myPostedJobs'
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              My posted jobs
            </NavLink>
            <NavLink
              to='/myBids'
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              My Bids
            </NavLink>
            <NavLink
              to='/bidRequests'
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              Bid Requests
            </NavLink>
            {user ? (
              <>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    isActive ? "underline font-bold" : ""
                  }
                ></NavLink>
              </>
            ) : (
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : ""
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>

      <div className='dropdown dropdown-end '>
        {user?.photoURL ? (
          <>
            <label tabIndex={0} className='cursor-pointer'>
              <div className='avatar'>
                <div className='w-12 rounded-full'>
                  <img src={user.photoURL} />
                </div>
              </div>
            </label>

            <div
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 bg-teal-100 rounded-e-2xl w-52'
            >
              <NavLink className='px-4 py-2 hover:bg-base-300 rounded-lg'>
                {user.displayName}
              </NavLink>

              <div className='cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg'>
                <button onClick={handleLogOut}>Logout</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <label tabIndex={0} className='cursor-pointer'>
              <div className='avatar'>
                <div className='w-12 rounded-full'>
                  <img src='https://i.ibb.co/DMX6WRW/profile-remove-svgrepo-com.png' />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-teal-100 rounded-box w-52 '
            >
              <div className='cursor-pointer text-emerald-500 px-4 py-2 hover:bg-base-300 rounded-lg'>
                <Link to='/login'>
                  <button>Login/Register</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <div className=' m-auto md:hidden ml-5'>
        <label
          htmlFor='my-drawer-3'
          aria-label='open sidebar'
          className='btn btn-square btn-ghost'
        >
          <svg
            width='50px'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
          >
            <path
              stroke='#000000'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M4 5h16M4 19h16'
            />
            <rect
              width='10'
              height='4'
              x='7'
              y='10'
              stroke='#000000'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1'
              rx='2'
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
