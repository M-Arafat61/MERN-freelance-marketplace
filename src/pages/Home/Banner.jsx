import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto my-5 md:my-10 p-2 md:p-10 lg:my-16 md:flex items-center flex-row-reverse gap-5'>
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 60,
            }}
          >
            <div className='text-center my-10 space-y-5 '>
              <h3 className='text-5xl font-bold'>
                We find the best jobs for you
              </h3>
              <p className='italic'>
                Explore Exciting Career Opportunities with Us
              </p>
              <hr className='w-full border-teal-100' />
              <hr className='w-1/2 mx-auto border-teal-100' />
            </div>
          </motion.div>
        </div>

        <div>
          <div className='m-auto'>
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
