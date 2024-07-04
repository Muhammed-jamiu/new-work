import ReactDOM from "react-dom/client";
import React from "react";
// import "../src/style/tail.css";
import { BrowserRouter } from "react-router-dom";
// import RouterApp from "./Router-App-Files/RouterApp";
// import NavBar from "./Router-App-Files/Routercomponent/NavBar";
// import LocalStorage from "./Router-App-Files/Routercomponent/LocalStorage";
// import AppTest from "./Router-App-Files/RouterTestApp/AppTest";
// import ResponsiveNav from "./Router-App-Files/RouterTestApp/ResponsiveNav";
// import LoginAssigment from "./RouterProject/LoginAssigment";
import BaseApp from "./Router-App-Files/LogProfileass/BaseApp";
// import ReactRouter from "./ScrimbaFolder/ReactRouter";
// import SpeakApp from "./Assignment/SpeakApp";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RouterApp></RouterApp> */}
      {/* <AppTest></AppTest> */}
      {/* <LocalStorage></LocalStorage> */}
      {/* <ResponsiveNav></ResponsiveNav> */}
      {/* <LoginAssigment /> */}
      <BaseApp />
      {/* <ReactRouter></ReactRouter> */}
      {/* <SpeakApp></SpeakApp> */}
    </BrowserRouter>
  </React.StrictMode>
);
