import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, Navigate } from "react-router-dom";

function Register() {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setRegistrationSuccess(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);

        // ..
      });
  }

  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover bg-babypink">
      <div className="bg-darkcherry border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-whitefont-bold text-center mb-6">
          Sign Up
        </h1>
        <form>
          <div className="relative my-4">
            <input
              name="email"
              type="text"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-babypink  focus:outline-none focus:ring-0 focus:text-white focus:border-"
              onChange={(e) => {
                handleCredentials(e);
              }}
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="relative my-4">
            <input
              name="password"
              type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-babypink  focus:outline-none focus:ring-0 focus:text-white focus:border-"
              onChange={(e) => {
                handleCredentials(e);
              }}
            />
            <label htmlFor="password">Your Password</label>
          </div>

          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-darkcherry text-white hover:bg-white hover:text-darkcherry ring-2 ring-darkcherry hover:ring-darkcherry transition colors  duration-300"
            type="button"
            onClick={(e) => handleSignup(e)}
          >
            Register
          </button>

          {error && <div className="text-red-800 text-[11px]"> {error} </div>}
          {registrationSuccess && <Navigate to="/private" />}

          <div>
            <span className="mt-4">
              Already Have an Account?
              <Link to="/login" className="text-blue-900">
                {" "}
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;

