import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feedback = () => {
  return (
    <div className='max-w-7xl my-5 md:my-10 p-2 md:p-10 lg:my-16 m-auto flex items-center  flex-col-reverse lg:flex-row gap-5'>
      <div className=' w-full md:w-3/4 flex flex-col items-center justify-center rounded-lg overflow-hidden'>
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          useKeyboardArrows={true}
          showIndicators={false}
          width={"550px"}
        >
          <div className=''>
            <p className=' text-lg'>
              As a Developer, I found my dream job through this site! The
              listings are always up to date. It provides a great user
              experience and is easy to use. Highly recommended for job seekers.
            </p>
            <h2 className='text-2xl font-medium'>
              - John, Full-Stack Developer
            </h2>
          </div>

          <div>
            <p className='p-5 text-lg'>
              I am a Designer, and I found my ideal job on this platform! The
              job listings are consistently updated, and the user experience is
              fantastic. I highly recommend it to job seekers.
            </p>
            <h2 className='text-2xl font-medium'>- Sarah, UI/UX Designer</h2>
          </div>
          <div>
            <p className='p-5 text-lg'>
              I discovered an excellent job on this site! The listings are
              always current, and the user experience is top-notch. I would
              highly recommend it to job seekers.
            </p>
            <h2 className='text-2xl font-medium'>
              - David, Digital Marketing Specialist
            </h2>
          </div>
        </Carousel>
      </div>
      <div className='w-1/2'>
        <img
          src='https://apusthemes.com/wp-demo/superio/wp-content/uploads/2023/07/h22-slider.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Feedback;
