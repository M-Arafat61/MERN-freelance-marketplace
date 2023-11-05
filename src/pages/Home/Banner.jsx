//

const Banner = () => {
  return (
    <div className='w-full min-h-screen mx-auto border border-red-500 my-20'>
      <div className='text-center my-10 space-y-5'>
        <h3 className='text-5xl font-bold'>We find the best jobs for you</h3>
        <p>Explore your career opportunity through with us</p>
      </div>
      <div className=''>
        <img
          className='w-full object-cover overflow-hidden rounded-lg'
          src='https://i.ibb.co/Nm2LvN2/diverse-people-working-office.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Banner;
