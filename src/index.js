import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


const divPrincipal=document.getElementById("root")

const root=ReactDOM.createRoot(divPrincipal)


root.render(<App/>)