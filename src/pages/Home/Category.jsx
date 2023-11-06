import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../pages/Home/styles.css";
import { useCallback, useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { TbHandFinger } from "react-icons/tb";
import { Link } from "react-router-dom";

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
        console.log(response.data);
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

  console.log(jobData);

  return (
    <div className='mx-auto my-28'>
      <div className='text-start my-10 space-y-5'>
        <h3 className='text-5xl font-bold'>Browse by category</h3>
        <p>Explore your career opportunity with us</p>
      </div>
      <Tabs
        onSelect={index =>
          fetchJobData(categoriesData[0].categories[index].name)
        }
      >
        <TabList className='flex justify-center '>
          {categoriesData[0]?.categories.map((category, index) => (
            <Tab key={index}>
              <div className='flex flex-col items-center gap-5 border p-3 hover:bg-base-300 rounded-lg overflow-hidden'>
                <div className='bg-base-200 rounded-full'>
                  <img
                    className='p-3'
                    src={category.image}
                    alt={"category image"}
                  />
                </div>
                <p className='text-lg font-bold capitalize'>{category.name}</p>
              </div>
            </Tab>
          ))}
        </TabList>

        {categoriesData[0]?.categories.map(category => (
          <TabPanel key={category.name}>
            <div className=''>
              {jobData?.map(job => (
                <div
                  className='border hover:border-amber-500 my-10 p-10 w-full flex flex-col  space-y-2 rounded-lg overflow-hidden'
                  key={job._id}
                >
                  <p className='text-xl font-semibold'>{job.title}</p>
                  <div className='flex justify-start gap-10 items-center italic'>
                    <p>
                      Salary range: ${job.minimumPrice}- ${job.maximumPrice}
                      (yearly)
                    </p>

                    <p>Deadline: {job.deadline}</p>
                  </div>

                  <p>{job.description}</p>

                  <div className=''>
                    <Link to={`/jobs/${job._id}`}>
                      <button className='flex flex-row items-center text-start text-lg hover:btn-outline'>
                        Bid now <TbHandFinger className='ml-2' />
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
