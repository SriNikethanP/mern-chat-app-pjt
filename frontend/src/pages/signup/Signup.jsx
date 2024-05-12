import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col h-full w-full items-center justify-center ">
      <div className="min-w-96  mx-auto bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="w-100 p-5">
          <h1 className=" text-3xl font-semibold text-center text-white ">
            SignUp <span className="text-blue-500">ChatApp</span>
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2  justify-center"
        >
          <div className="flex flex-col gap-2  items-center justify-center">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">
                  What is your name?
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={inputs.fullName}
                onChange={(e) => {
                  setInputs({ ...inputs, fullName: e.target.value });
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Username</span>
              </div>
              <input
                type="text"
                placeholder="Enter username"
                className="input input-bordered w-full max-w-xs"
                value={inputs.username}
                onChange={(e) => {
                  setInputs({ ...inputs, username: e.target.value });
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Password</span>
              </div>
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-xs"
                value={inputs.password}
                onChange={(e) => {
                  setInputs({ ...inputs, password: e.target.value });
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Confirm Password</span>
              </div>
              <input
                type="text"
                placeholder="Re-type password"
                className="input input-bordered w-full max-w-xs"
                value={inputs.confirmPassword}
                onChange={(e) => {
                  setInputs({ ...inputs, confirmPassword: e.target.value });
                }}
              />
            </label>
            <GenderCheckbox
              onCheckBoxChange={handleCheckBox}
              selectedGender={inputs.gender}
            />
            <div>
              <button type="submit" className="btn text-white">
                Sign Up
              </button>
            </div>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 p-2 text-white inline-block"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
