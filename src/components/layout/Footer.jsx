const Footer = () => {
  return (
    <div className='max-w-7xl m-auto my-5 md:my-10 p-2 md:px-10 lg:my-16 '>
      <footer className='footer  text-base-content justify-between'>
        <nav>
          <header className='footer-title'>Services</header>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <header className='footer-title'>Company</header>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <div>
            <p className=' text-xl font-bold '>ITQuester</p>
            <img
              className='w-52 md:w-36'
              src='https://i.ibb.co/C8C9BTp/it-quester.png'
              alt=''
            />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
