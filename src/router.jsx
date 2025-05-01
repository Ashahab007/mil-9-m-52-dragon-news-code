import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Header from "./component/Header";

const router = createBrowserRouter([
  { path: "/", element: <HomeLayout></HomeLayout> },
  { path: "news", element: <h1>News</h1> },
  { path: "auth", element: <h1>Authentication</h1> },
  { path: "/*", element: <h1>Error404</h1> },
]);

export default router;
