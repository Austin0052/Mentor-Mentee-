import React, { useState } from "react";
import logo from "./shared/logo.png";
import SignUpForm from "./SignUpForm.jsx"
 
const LoginForm = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [role, setRole] = useState("mentor"); // State to manage selected role
 
  const openSignUp = () => setShowSignUp(true);
  const closeSignUp = () => setShowSignUp(false);
 
  return (
    <div>
      {showSignUp ? (
        <SignUpForm onClose={closeSignUp} />
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
          <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
            <div className="text-center mb-6">
              <img src={logo} alt="" />
              <p className="text-gray-600">Sign in to your account</p>
            </div>
 
            {/* Role selection buttons */}
            <div className="flex justify-center mb-6">
              <button
                className={`w-1/2 p-2 rounded-l-lg ${
                  role === "mentor" ? "bg-gray-400" : "bg-gray-200"
                } text-gray-800`}
                onClick={() => setRole("mentor")}
              >
                👩‍🏫 Mentor
              </button>
              <button
                className={`w-1/2 p-2 rounded-r-lg ${
                  role === "mentee" ? "bg-gray-400" : "bg-gray-200"
                } text-gray-800`}
                onClick={() => setRole("mentee")}
              >
                👨‍🎓 Mentee
              </button>
            </div>
 
            <form>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="username">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Enter email or username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Enter password"
                />
              </div>
              <div className="text-right mb-4">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Forgot password?
                </a>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transform transition-transform hover:scale-105">
                Sign In
              </button>
            </form>
 
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  onClick={openSignUp}
                  href="#"
                  className="text-purple-600 hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default LoginForm;