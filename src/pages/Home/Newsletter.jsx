// https://apusthemes.com/wp-demo/superio/wp-content/uploads/2023/07/h22-banner4.png

const Newsletter = () => {
  return (
    <div className='flex justify-between items-center my-20'>
      <div>
        <img
          src='https://apusthemes.com/wp-demo/superio/wp-content/uploads/2023/07/h22-banner4.png'
          alt=''
        />
      </div>
      <div className='space-y-3 text-left'>
        <h3 className='text-xl font-bold'>Subscribe Our Newsletter</h3>
        <p>
          Advertise your jobs to millions of monthly users and search <br />
          thousand CVs in our database.
        </p>
      </div>
      <div className='relative flex justify-end'>
        <input
          type='text'
          placeholder='Email'
          className='input input-bordered w-80'
        />
        <button className='btn absolute '>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
