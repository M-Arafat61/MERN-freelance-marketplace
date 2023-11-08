import { useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { useParams } from "react-router-dom";
import JobDetailsForm from "./JobDetailsForm";

const JobDetails = () => {
  const axiosInstance = useAxiosInstance();
  const { id } = useParams();
  const [specificJob, setSpecificJob] = useState(null);
  const {
    deadline,
    description,
    email,
    maximumPrice,
    minimumPrice,
    title,
    skills,
  } = specificJob || {};

  document.title = `Job Post | ${title}`;
  useEffect(() => {
    const fetchSpecificJob = async () => {
      try {
        const response = await axiosInstance.get(`/jobs/${id}`);
        setSpecificJob(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSpecificJob();
  }, [id, axiosInstance]);

  return (
    <div className='flex flex-col md:flex-row gap-5 my-20 p-2 max-w-7xl m-auto'>
      <div className='flex-1'>
        <div className='border rounded-xl overflow-hidden'>
          <div className='space-y-3 border-b p-5'>
            <h3 className='text-2xl font-medium '>{title}</h3>
            <p>Deadline {deadline}</p>
            <p>
              Budget ${minimumPrice}-{maximumPrice}
            </p>
          </div>
          <div className='my-3 p-5 border-b'>
            <p>{description}</p>
          </div>
          <div className='p-5'>
            <p className='font-medium'>Skills and Expertise</p>
            {skills?.map((skill, index) => (
              <div key={index}>
                <p>-{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex-1 border  rounded-xl overflow-hidden'>
        <div className='p-5'>
          <JobDetailsForm title={title} email={email} />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
