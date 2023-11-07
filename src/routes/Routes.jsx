import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyBids from "../pages/MyBids/MyBids";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import JobUpdateForm from "../pages/MyPostedJobs/JobUpdateForm";
import BidRequests from "../pages/BidRequests/BidRequests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "jobs/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/myPostedJobs",
        element: <MyPostedJobs></MyPostedJobs>,
      },
      {
        path: "/updateJobInfo/:id",
        element: <JobUpdateForm></JobUpdateForm>,
      },
      {
        path: "/bidRequests",
        element: <BidRequests></BidRequests>,
      },
      {
        path: "/deleteJob",
        element: <JobUpdateForm></JobUpdateForm>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
