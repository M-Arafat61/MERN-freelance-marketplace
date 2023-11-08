import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='bg-teal-100 rounded-b-3xl  navbar'>
          <Navbar></Navbar>
        </div>
        {children}
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay '
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-teal-100'>
          <Sidebar></Sidebar>
        </ul>
      </div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
