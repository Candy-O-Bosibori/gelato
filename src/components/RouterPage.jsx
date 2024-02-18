import React from 'react'
import { Routes, Route, } from 'react-router-dom'

import FirstPage from './FirstPage/FirstPage'
import Login from "./Login/Login";
import Register from "./Register/Register";
import { useState, useEffect } from "react";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import Home from './Home/Home';
import About from './About';
import ProtectedRoute from './ProtectedRoute';



function RouterPage() {

    const [user, setUser] = useState(null);
    const [isfetching, setIsfetching] = useState(true);
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setIsfetching(false);
          return;
        }
        setUser(null);
        setIsfetching(false);
      });
      return () => unsubscribe();
    }, []);
  
    if (isfetching) {
      return <h2>Loading...</h2>;
    }

  return (
    <div>
       <Routes>
          <Route index path="/" element={<FirstPage></FirstPage>}></Route>
          <Route index path="register" element={<Register></Register>}></Route>
          <Route index path="login" element={<Login></Login>}></Route>
          <Route index path="about" element={<About></About>}></Route>
          <Route
            index
            path="/private"
            element={
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
            }
          ></Route>
        </Routes>
    </div>
  )
}

export default RouterPage
