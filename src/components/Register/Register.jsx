import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, Navigate } from "react-router-dom";
import { SiteData } from "../SiteWrapper";


function Register() {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const {createUser}  = SiteData()

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  // authenticate andcreate a user in firebase
  function handleSignup(e) {
    e.preventDefault();
    // remove the error (id any)
    setError("");
    // send this to the useContext to create the account in firrebase
    createUser(
      userCredentials.name,
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
        setError(error.message);

        // ..
      });
  }

  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover bg-babypink dark:bg-bpdm">
      <div className="bg-darkcherry border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-whitefont-bold text-center mb-6">
          Sign Up
        </h1>
        <form>
        <div className="relative my-4">
          {/* name */}
            <input
              name="name"
              type="text"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-babypink  focus:outline-none focus:ring-0 focus:text-white focus:border-"
              onChange={(e) => {
                handleCredentials(e);
              }}
            />
            <label htmlFor="email">Your Name</label>
          </div>
          <div className="relative my-4">
            {/* email */}
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
            {/* password */}
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
{/* if the registration was successfull i was to navigate to the home page(the restricted page) */}
          {error && <div className="text-red-800 text-[11px]"> {error} </div>}
          {registrationSuccess && <Navigate to="/private" />}

          <div>
            {/* if already have an account redirect to the login page */}
            <span className="mt-4">
              Already Have an Account?
              <Link to="/login" className="text-blue-900 dark:text-blue-500">
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

