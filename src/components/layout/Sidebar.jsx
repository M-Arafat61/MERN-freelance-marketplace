import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-2'>
      {/* Navbar menu content here */}
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? "underline font-bold" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to='/addJob'
        className={({ isActive }) => (isActive ? "underline font-bold" : "")}
      >
        Add job
      </NavLink>
      <NavLink
        to='/myPostedJobs'
        className={({ isActive }) => (isActive ? "underline font-bold" : "")}
      >
        My posted jobs
      </NavLink>
      <NavLink
        to='/myBids'
        className={({ isActive }) => (isActive ? "underline font-bold" : "")}
      >
        My Bids
      </NavLink>
      <NavLink
        to='/bidRequests'
        className={({ isActive }) => (isActive ? "underline font-bold" : "")}
      >
        Bid Requests
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? "underline font-bold" : "")}
      >
        Login
      </NavLink>
    </div>
  );
};

export default Sidebar;
