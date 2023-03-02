import React from "react";
import { gandayarn } from "../assets";
import { Link } from "react-router-dom";

const CreateAnAccount = () => {
  return (
    <div className="bg-[#dbf1fe]">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={gandayarn}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Welcome to Ganda Yarn!
            </h2>
            <p className="mt-2 text-center text-[18px] text-gray-600">
              Please create an account here.
            </p>
          </div>

          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="password" className="sr-only">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="first-name"
                  autocomplete="first-name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md bg-white border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label for="password" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="last-name"
                  autocomplete="last-name"
                  required
                  className="relative block w-full appearance-none rounded-none bg-white border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <label for="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none bg-white border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md bg-white border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative mt-10 flex w-full justify-center rounded-md border border-transparent bg-[#ff55ee] py-2 px-4 text-sm font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-white group-hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Create Account
              </button>
            </div>
            <div className="flex items-center justify-center text-[15px]">
              <p className="mx-2">Have an account? </p>
              <Link
                to="/login"
                className="font-medium text-[#3b82f6] hover:text-[#1e40af]"
              >
                Login here.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
