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
    <div className='w-full mx-auto p-10'>
      <div className='flex-none md:hidden'>
        <label
          htmlFor='my-drawer-3'
          aria-label='open sidebar'
          className='btn btn-square btn-ghost'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
      </div>
      <div className='flex items-center '>
        <img
          className='w-[70px]'
          src='https://i.ibb.co/jvfQPjZ/logo.png'
          alt=''
        />
        <p className='text-xl font-bold ml-2'>ITQuester</p>
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
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
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
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
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
    </div>
  );
};

export default Navbar;
