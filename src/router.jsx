import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Header from "./component/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "category/:id", element: <Category></Category> },
    ],
  },
  { path: "news", element: <h1>News</h1> },
  { path: "auth", element: <h1>Authentication</h1> },
  { path: "/*", element: <h1>Error404</h1> },
]);

export default router;
