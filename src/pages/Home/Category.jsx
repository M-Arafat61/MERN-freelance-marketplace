import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../pages/Home/styles.css";
import { useCallback, useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { TbHandFinger } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Category = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const axiosInstance = useAxiosInstance();

  const fetchJobData = useCallback(
    async category => {
      try {
        const response = await axiosInstance.get(
          `/jobs-by-category/${category}`
        );
        setJobData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    [axiosInstance]
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        setCategoriesData(response.data);
        if (
          response.data[0]?.categories &&
          response.data[0].categories.length > 0
        ) {
          fetchJobData(response.data[0].categories[0].name);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [axiosInstance, fetchJobData]);

  // console.log(jobData);

  return (
    <div className='mx-auto max-w-7xl my-5 md:my-10 p-2 md:p-10 lg:my-16'>
      <div className='text-start mb-10 space-y-5'>
        <h3 className='text-5xl font-bold'>Browse jobs by category</h3>
        <p className='px-5 md:p-0'>
          Harness the power of code to build and maintain websites and
          applications that captivate users. Craft interactive digital
          experiences that leave a lasting impression. Transform ideas into
          visually stunning creations. Design graphics, illustrations, and
          layouts that convey messages with creativity and flair. Drive business
          success through digital channels. Optimize campaigns, engage
          audiences, and boost brand visibility with innovative marketing
          strategies.
        </p>
      </div>
      <Tabs
        onSelect={index =>
          fetchJobData(categoriesData[0].categories[index].name)
        }
      >
        <TabList className='flex justify-center gap-2 md:gap-5'>
          {categoriesData[0]?.categories.map((category, index) => (
            <Tab key={index}>
              <motion.div
                className='box'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className='flex flex-col items-center gap-5 border p-3 hover:bg-teal-100 rounded-lg overflow-hidden'>
                  <div className='bg-teal-100 rounded-full'>
                    <img
                      className='p-3'
                      src={category.image}
                      alt={"category image"}
                    />
                  </div>
                  <p className='text-base md:text-lg font-bold capitalize'>
                    {category.name}
                  </p>
                </div>
              </motion.div>
            </Tab>
          ))}
        </TabList>

        {categoriesData[0]?.categories.map(category => (
          <TabPanel key={category.name}>
            <div className='p-2'>
              {jobData?.map(job => (
                <div
                  className='border hover:border-teal-500 my-10 p-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between  space-y-2 md:space-y-0 rounded-lg overflow-hidden'
                  key={job._id}
                >
                  <div className='space-y-2 w-full md:w-3/5 lg:w-3/4'>
                    <p className='text-xl font-semibold'>{job.title}</p>
                    <p>
                      Budget ${job.minimumPrice}- ${job.maximumPrice}
                    </p>
                    <p>{job.description}</p>
                  </div>

                  <div className=''>
                    <p className='mb-3'>Deadline {job.deadline}</p>
                    <Link to={`/jobs/${job._id}`}>
                      <button className='flex flex-row items-center text-start "middle none text-base-200 center rounded-r-full bg-teal-400 py-3 px-6 font-sans  font-bold capitalize shadow-md shadow-teal-500/20 transition-all  hover:shadow-teal-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                        Bid now
                        <TbHandFinger className='ml-2 text-black text-2xl' />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
