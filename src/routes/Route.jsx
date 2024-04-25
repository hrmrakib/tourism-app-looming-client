import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
