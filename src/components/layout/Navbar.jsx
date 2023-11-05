import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='w-full mx-auto '>
      <div className='flex-none lg:hidden'>
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
      <div className='flex w-1/2 px-2 border  border-red-400 mx-2'>
        Tech Jobs
      </div>
      <div className='flex w-full justify-center items-center'>
        <div className=' flex-none hidden lg:block border border-blue-400 '>
          <div className='flex items-center gap-2 justify-between'>
            {/* Navbar menu content here */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
      <div className='dropdown dropdown-end '>
        <label tabIndex={0} className='cursor-pointer'>
          <div className='avatar'>
            <div className='w-10 rounded-full'>
              <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
          </div>
        </label>
        <div
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <NavLink className='px-4 py-2 hover:bg-base-300 rounded-lg'>
            Profile
          </NavLink>

          <div className='cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg'>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
