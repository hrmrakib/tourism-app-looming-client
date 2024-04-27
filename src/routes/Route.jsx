import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Root from "../layouts/Root";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/Login";
import AddTouristSpot from "../pages/AddTouristSpot";
import PrivateRoute from "./PrivateRoute";
import DetailViewTouristSpot from "../components/tourist/DetailViewTouristSpot";
import { baseURL } from "../utilities/url";
import AllTouristSpot from "../pages/AllTouristSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot />,
      },
      {
        path: "/tourspot-detail/:id",
        element: (
          <PrivateRoute>
            <DetailViewTouristSpot />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${baseURL}/allspot/${params.id}`),
      },
    ],
  },
]);

export default router;
