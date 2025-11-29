import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import HomePage from "../components/Pages/HomePage";
import ProfilePage from "../components/Pages/ProfilePage";
import ErrorPage from "../components/Pages/ErrorPage";
import DetailsCard from "../components/DetailsCard";
import Loading from "../components/Pages/Loading";
import AllToys from "../components/Pages/AllToys";
import Login from "../components/Pages/Login";
import Registration from "../components/Pages/Registration";
import PrivateRoute from "./PrivateRoute";
import BecomeSeller from "../components/BecomeSeller";
import ForgetPassword from "../components/Pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch("/popular.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage></ProfilePage>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/contribute",
        element: (
          <PrivateRoute>
            <BecomeSeller></BecomeSeller>{" "}
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/forget-password',
        element: <ForgetPassword></ForgetPassword>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      // {
      //   path: "/card-details/:id",
      //   element: <DetailsCard></DetailsCard>,
      //   loader: () => fetch("./data.json"),
      //   hydrateFallbackElement: <Loading></Loading>,
      // },
      // {
      //   path: "/all-toys",
      //   element: <AllToys></AllToys>,
      //   loader: () => fetch("./data.json"),
      //   hydrateFallbackElement: <Loading></Loading>,
      // },
    ],
  },
  {
    path: "/card-details/:id",
  element: (
    <PrivateRoute>
      <DetailsCard />
    </PrivateRoute>
  ),
  loader: async () => {
    const res = await fetch("/data.json");           
    const json = await res.json();
    return json.toys || json.data || json;          
  },
  },
  {
    path: "/all-toys",
    element: <AllToys></AllToys>,
    loader: () => fetch("./data.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },

  // {
  //   path: '/login',
  //   element: <Login></Login>,
  //   hydrateFallbackElement: <Loading></Loading>
  // },
  // {
  //   path: 'register',
  //   element: <Registration></Registration>,
  //   hydrateFallbackElement: <Loading></Loading>,
  // },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;