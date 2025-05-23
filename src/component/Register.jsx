import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

// 6.0 showing error in register for name
// 7.2 received with use(AuthContext)
const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoUrl, email, password);

    // 6.1 set the error condition
    if (name.length < 3) {
      setNameError("Name must be more than 3 letters");
      return;
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // setUser(user); commented due to applying updateUser function

        // 7.3 as the user data will be updated during registration so updateUser function will be call here which takes a parameter as an object from documentation
        updateUser({ displayName: name, photoURL: photoUrl })
          // 7.4 as we previously used the user in setUser which is commented on line 30. Now we need the both data user and the displayName: name, photoURL: photoUrl. so copy the user in setUser with displayName: name, photoURL: photoUrl .
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
            console.log(user);
          })

          .catch((error) => {
            console.log(error);
            // 7.5 here setUser(user) is used if the user is not logged in it will show the default icon in navbar
            setUser(user);
          });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };
  return (
    <div className="w-6/12 mx-auto bg-white py-10 px-8 rounded-2xl mt-12">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Register your account
      </h1>

      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          {/* Name */}
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {/* Photo */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Photo URL
          </label>
          <input
            type="text"
            name="photoUrl"
            placeholder="Enter your photo URL"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {/* Password */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="acceptTerms"
            className="ml-2 block text-sm text-gray-700"
          >
            Accept Terms & Conditions
          </label>
        </div>
        {nameError ? <p className="text-red-500 text-xs">{nameError}</p> : ""}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-6"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
