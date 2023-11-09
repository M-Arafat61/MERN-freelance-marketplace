// https://apusthemes.com/wp-demo/superio/wp-content/uploads/2023/07/h22-banner4.png

const Newsletter = () => {
  return (
    <div className='p-2 md:p-10 mx-auto py-20 max-w-7xl md:my-10  lg:my-16 '>
      <div className='flex flex-col gap-5 lg:flex-row justify-between items-center'>
        <div className='flex flex-col-reverse md:flex-row items-center gap-5'>
          <div>
            <img
              className='w-full'
              src='https://apusthemes.com/wp-demo/superio/wp-content/uploads/2023/07/h22-banner4.png'
              alt=''
            />
          </div>
          <div className='space-y-3 text-left'>
            <h3 className='text-5xl font-bold'>Subscribe Our Newsletter</h3>
            <p>
              Advertise your jobs to millions of monthly users and search
              thousand CVs in our database.
            </p>
          </div>
        </div>
        <div className='relative flex justify-end'>
          <input
            type='text'
            placeholder='Email'
            className='input input-bordered w-80 '
          />
          <button className='absolute btn-md flex flex-row items-center text-start "middle none text-base-200 center rounded-l-lg bg-teal-400 py-3 px-6 font-sans  font-bold capitalize shadow-md shadow-blue-500/20 transition-all  hover:shadow-teal-300 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
