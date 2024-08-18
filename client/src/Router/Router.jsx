import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PostJob from "../pages/PostJob";
import MyJob from "../pages/MyJob";
import UpdateJob from "../pages/UpdateJob";
import JobDetails from "../pages/JobDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-job",
        element: <MyJob />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          //   fetch(`http://localhost:5000/all-jobs/${params.id}`),
          // https://placedit-offcampus.onrender.com/
          // fetch(
          //   `https://placed-it-offcampus-backend.vercel.app/all-jobs/${params.id}`
          // ),
          fetch(
            `https://placedit-offcampus.onrender.com/all-jobs/${params.id}`
          ),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
]);

export default Router;
