import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center ">
      <div className="min-w-96  mx-auto bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="w-100 p-5">
          <h1 className=" text-3xl font-semibold text-center text-white ">
            SignUp <span className="text-blue-500">ChatApp</span>
          </h1>
        </div>
        <form className="flex flex-col gap-2  justify-center">
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
              />
            </label>
            <GenderCheckbox />
            <div>
              <button className="btn text-white">Sign Up</button>
            </div>
          </div>
          <a
            href="#"
            className="text-sm text-white hover:underline hover:text-blue-600 pb-3 inline-block"
          >
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
