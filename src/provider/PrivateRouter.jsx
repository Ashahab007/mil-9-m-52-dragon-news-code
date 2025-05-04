import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router";
import Loading from "../pages/Loading";

// 4.0 my requirement is when user is logged in with read more clicking it will stay in login page with successfully login. but we want to render it in specific news page.

// 2.0 my Requirement is if user is logged in user can go to news details page but if the user is no logged in user, when clicking the read more button user will redirect to the login page

// 2.1 created a Private Route which can take a default parameter children and as we need the user data from AuthProvider so user parameter is taken
const PrivateRouter = ({ children }) => {
  // 4.1 use useLocation
  const location = useLocation();
  console.log(location); //{pathname: '/news-details/bcdef0123456789abcdef01234', search: '', hash: '', state: null, key: 'to349j80'}

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
  // 2.5 else it will render to the login page
  //   4.2 set in state location.pathname
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRouter;
