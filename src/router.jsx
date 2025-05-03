import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Header from "./component/Header";
import Home from "./pages/Home";
import Category from "./component/Category";
import CategoryNews from "./pages/CategoryNews";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./component/Login";
import Register from "./component/Register";
import NewsDetails from "./pages/NewsDetails";
import PrivateRouter from "./provider/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/public/news.json"),
      },
    ],
  },
  // 1.1 make the id dynamic
  // 1.4 use NewsDetails in element
  // 1.9 now fetch the data using loader
  {
    loader: () => fetch("/public/news.json"),
    path: "/news-details/:id",
    // 2.3 use the NewsDetails inside the PrivateRoute as children
    element: (
      <PrivateRouter>
        <NewsDetails></NewsDetails>
      </PrivateRouter>
    ),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/login", element: <Login></Login> },
      { path: "/auth/register", element: <Register></Register> },
    ],
  },
  { path: "/*", element: <h1>Error404</h1> },
]);

export default router;
