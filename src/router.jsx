import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Header from "./component/Header";
import Home from "./pages/Home";
import Category from "./component/Category";
import CategoryNews from "./pages/CategoryNews";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./component/Login";
import Register from "./component/Register";

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
  { path: "news", element: <h1>News</h1> },
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
