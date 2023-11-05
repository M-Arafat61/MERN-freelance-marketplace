import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import AddJob from "../pages/AddJob/AddJob";

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
