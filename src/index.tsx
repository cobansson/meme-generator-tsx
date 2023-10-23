import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
)