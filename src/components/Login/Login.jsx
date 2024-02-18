import React, { useState } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase.js";
import { Link, Navigate } from "react-router-dom";
import { SiteData } from "../SiteWrapper.jsx";

function Login() {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { logInUser } = SiteData();

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function logIn(e) {
    e.preventDefault();

    setError("");
    logInUser(userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoginSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function handlePasswordReset() {
    const email = prompt("Please enter your email");
    sendPasswordResetEmail(auth, email);
    alert("Password sent");
  }

  return (
    <div className="text-darkcherry h-[100vh] flex justify-center items-center bg-cover bg-babypink dark:bg-bpdm">
      <div className="bg-darkcherry  border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-whitefont-bold text-center mb-6 dark:text-white">Login</h1>
        <form action="">
          <div className="relative my-4">
            <input
             name="email"
              type="email"
              className="block w-72 py-2.3 px-0 text-sm text-white  dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-babypink  focus:outline-none focus:ring-0 focus:text-white focus:border-"
              onChange={(e) => handleCredentials(e)}
            />
            <label htmlFor="" className="dark:text-white">Your Email</label>
          </div>
          <div className="relative my-4">
            <input
              name="password"
              type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-babypink  focus:outline-none focus:ring-0 focus:text-white focus:border-"
              onChange={(e) => handleCredentials(e)}
            />
            <label htmlFor="" className="dark:text-white">Your Password</label>
          </div>

          <button
            type="submit"
            onClick={(e) => logIn(e)}
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-darkcherry text-white ring-1 ring-darkcherry hover:bg-white hover:text-darkcherry hover:ring-darkcherry transition colors  duration-300"
          >
            Login
          </button>

          {error && <div className="text-red-800 text-[11px]"> {error} </div>}
          {loginSuccess && <Navigate to="/private" />}
          <p
            className="text-[15px] text-blue-900  dark:text-blue-500"
            onClick={handlePasswordReset}
          >
            Forgort password?
          </p>

          <div>
            <span className="mt-4 dark:text-white">
              New Here?{" "}
              <Link to="/register" className="text-blue-900 dark:text-blue-500">
                {" "}
                Create a New Account!
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
