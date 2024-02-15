import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FirstPage from "./components/FirstPage/FirstPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import MyCart from "./components/MyCart/MyCart.jsx";
import Login from "./components/Login/Login.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="MyCart" element={< MyCart/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<App />
  </React.StrictMode>
);
