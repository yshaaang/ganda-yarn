import React, { useState, useContext, useCallback } from "react";
import { gandayarn } from "../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountContext from "../context/AccountContext";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { session, login } = useContext(AccountContext);

  const submitLogin = useCallback(
    (val) => {
      val.preventDefault();
      login(username, password);
    },
    [username, password]
  );

  function getUsername(event) {
    setUsername(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

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
              Please login your account.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md bg-white border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                  onChange={getUsername}
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
                  onChange={getPassword}
                />
              </div>
            </div>

            <div className="py-5">
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ff55ee] py-2 px-4 text-sm font-medium text-white hover:bg-[#3eadcf] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(val) => submitLogin(val)}
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
                Login
              </button>
            </div>
            <div className="flex items-center justify-center text-[15px]">
              <p className="mx-2 mb-10">Don't have an account yet? </p>
              <Link
                to="/create_an_account"
                className="font-medium mb-10 text-[#3b82f6] hover:text-[#1e40af]"
              >
                Create an account here.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
