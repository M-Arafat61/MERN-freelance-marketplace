import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../pages/Home/styles.css";
import { useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const Category = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobData, setJobData] = useState([]);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        setCategoriesData(response.data);
        if (
          response.data[0]?.categories &&
          response.data[0].categories.length > 0
        ) {
          setSelectedCategory(response.data[0].categories[0].name);
          fetchJobData(response.data[0].categories[0].name);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, [axiosInstance]);

  const fetchJobData = async category => {
    try {
      const response = await axiosInstance.get(`/jobs-by-category/${category}`);
      setJobData(response.data);
      console.log(response.data);
      setSelectedCategory(category);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(jobData);

  return (
    <div className='my-20 mx-auto'>
      <div className='text-start my-10 space-y-5'>
        <h3 className='text-5xl font-bold'>Browse by category</h3>
        <p>Explore your career opportunity with us</p>
      </div>
      <Tabs
        onSelect={index =>
          fetchJobData(categoriesData[0].categories[index].name)
        }
      >
        <TabList className='flex justify-center space-x-4'>
          {categoriesData[0]?.categories.map((category, index) => (
            <Tab key={index}>
              <div className='flex flex-col items-center gap-5 border p-3 hover:bg-base-300 rounded-lg overflow-hidden'>
                <div className='bg-base-200 rounded-full'>
                  <img
                    className='p-3'
                    src={category?.image}
                    alt={category.name}
                  />
                </div>
                <p className='text-lg font-bold'>{category?.name}</p>
              </div>
            </Tab>
          ))}
        </TabList>
        {selectedCategory && (
          <TabPanel>
            <h2>{selectedCategory} Content</h2>
            {jobData?.map((job, index) => (
              <div key={index}>
                <p>{job.title}</p>
                {/* Add job data components */}
              </div>
            ))}
          </TabPanel>
        )}
        {selectedCategory && (
          <TabPanel>
            <h2>{selectedCategory} Content</h2>
            {jobData?.map((job, index) => (
              <div key={index}>
                <p>{job.title}</p>
                {/* Add job data components */}
              </div>
            ))}
          </TabPanel>
        )}
        {selectedCategory && (
          <TabPanel>
            <h2>{selectedCategory} Content</h2>
            {jobData?.map((job, index) => (
              <div key={index}>
                <p>{job.title}</p>
                {/* Add job data components */}
              </div>
            ))}
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
};

export default Category;
