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
import SpecificCountry from "../pages/SpecificCountry";
import MyListPage from "../pages/MyListPage";

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
        path: "/addTouristSpot",
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
      {
        path: "/specificCountry/:cName",
        element: (
          <PrivateRoute>
            <SpecificCountry />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${baseURL}/specificCountry/${params.cName}`),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
