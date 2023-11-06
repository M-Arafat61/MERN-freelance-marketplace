import { NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();
  return (
    <div className='flex flex-col gap-2'>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/addJob'
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Add job
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/myPostedJobs'
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          My posted jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/myBids'
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/bidRequests'
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Bid Requests
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            ></NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to='/login'
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </div>
  );
};

export default Sidebar;
