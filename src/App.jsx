import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouterPage from "./components/RouterPage";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/gelato/"}>
        <Header />
        <RouterPage />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
