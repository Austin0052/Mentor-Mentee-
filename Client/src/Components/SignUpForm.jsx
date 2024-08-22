import React, { useState } from "react";
 
const SignUpForm = ({ onClose }) => {
  const [role, setRole] = useState("mentor");
 
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
          <p className="text-gray-600">Create an account</p>
        </div>
 
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
            <label className="block text-gray-700" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="categories">
              Categories <span className="text-red-500">*</span>
            </label>
            <select
              id="categories"
              className="w-full mt-2 p-3 h-12 border border-gray-300 rounded-md text-lg"
              style={{ minHeight: "40px" }}
            >
              <option className="bg-white">Select</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Product</option>
              <option>Design</option>
              <option>Data Science</option>
              <option>Content Writing</option>
            </select>
          </div>
 
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="skills">
              Skills <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="skills"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your skills"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mb-5" />
              <span className="ml-2 text-gray-700">
                I have read and understood the{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                of this site.
              </span>
            </label>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
            Register
          </button>
        </form>
 
        <button
          className="mt-4 text-center text-red-600 hover:underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
 
export default SignUpForm;