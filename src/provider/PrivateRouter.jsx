import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

// 2.0 my Requirement is if user is logged in user can go to news details page but if the user is no logged in user, when clicking the read more button user will redirect to the login page

// 2.1 created a Private Route which can take a default parameter children and as we need the user data from AuthProvider so user parameter is taken
const PrivateRouter = ({ children }) => {
  // 2.2 get the user data by use(AuthContext) and destructure it
  //   3.3 get loading by use(AuthContext) and destructure it
  const { user, loading } = use(AuthContext);
  console.log(user);

  // 3.4 give the condition for loading when loading is true it will show the <Loading></Loading> component until the data is not received
  if (loading) {
    return <Loading></Loading>;
  }

  {
    /* 2.4 Now conditionally render the page if the user is logged in user can see the news details other wise user will render to login */
  }

  if (user) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRouter;
