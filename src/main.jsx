import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { SiteWrapper } from "./components/SiteWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SiteWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SiteWrapper>
);
