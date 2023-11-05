const MyBids = () => {
  return <div>MyBids</div>;
};

export default MyBids;


/* 

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import "../../pages/Home/styles.css";
// import { useEffect, useState } from "react";
// import useAxiosInstance from "../../hooks/useAxiosInstance";
// import { Link } from "react-router-dom";

// const BrowseByCategory = () => {
//   const [categoriesData, setCategoriesData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null); // Selected category state
//   const [jobData, setJobData] = useState([]); // Job data state

//   const axiosInstance = useAxiosInstance();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axiosInstance.get("/categories");
//         setCategoriesData(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCategories();
//   }, [axiosInstance]);

//   // Function to fetch job data for the selected category
//   const fetchJobData = async category => {
//     try {
//       const response = await axiosInstance.get(`/jobs-by-category/${category}`);
//       setJobData(response.data);
//       console.log(response.data);
//       setSelectedCategory(category);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(selectedCategory);
//   console.log(jobData);

//   return (
//     <div className='my-20 mx-auto'>
//       <div className='text-start my-10 space-y-5'>
//         <h3 className='text-5xl font-bold'>Browse by category</h3>
//         <p>Explore your career opportunity with us</p>
//       </div>

//       <Tabs>
//         <TabList className='flex justify-center space-x-4'>
//           {categoriesData[0]?.categories.map((category, index) => (
//             <Tab key={index}>
//               <div className='flex flex-col items-center gap-5 border p-3 hover:bg-base-300 rounded-lg overflow-hidden'>
//                 <div className='bg-base-200 rounded-full'>
//                   <img
//                     className='p-3'
//                     src={category?.image}
//                     alt={category.name}
//                   />
//                 </div>

//                 <Link
//                   onClick={() => fetchJobData(category.name)}
//                   // Fetch job data when category is clicked
//                   className='text-lg font-bold'
//                 >
//                   {category?.name}
//                 </Link>
//               </div>
//             </Tab>
//           ))}
//         </TabList>
//         {selectedCategory && (
//           <TabPanel>
//             <h2>{selectedCategory} Content</h2>
//            
//             {jobData.map((job, index) => (
//               <div key={index}>
//                 <p>{job.title}</p>
//                 {/* Add job data components */}
//               </div>
//             ))}
//           </TabPanel>
//         )}
//       </Tabs>
//     </div>
//   );
// };

// export default BrowseByCategory;