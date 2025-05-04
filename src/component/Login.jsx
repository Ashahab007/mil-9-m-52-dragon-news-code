import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

// 5.0 my requirement is showing error if password incorrect

const Login = () => {
  // 4.3 as we have set the location.pathname in 4.2. Now another useLocation() is set which is set to rendered in 4.2 and get the state value
  const location = useLocation();
  console.log(location);

  // 5.1 set an error state
  const [error, setError] = useState("");

  // 4.4 now we use useNavigate to render specific page upon location condition
  const navigate = useNavigate();

  const { logIn } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User Logged in successfully");
        console.log(user);
        // 4.5 if location.state value is exist or not will render two different page. It will also solve the problem after login page rendering from home
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // 5.2 set the error message
        setError(errorMessage);
      });
  };
  return (
    <div className="w-6/12 mx-auto bg-white py-10 px-8 rounded-2xl mt-12">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Login to your account
      </h1>

      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <button className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>
        </div>
        {/* 5.3 use condition to show the error in ui*/}
        {error ? <p className="text-red-500"> {error}</p> : ""}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-6"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
