import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from './serviceWorker'

//strictmode helper component to verify components, present warnings in console, dev only.
ReactDOM.render(
    // <React.StrictMode>
        <App />,
    // </React.StrictMode>,
    document.getElementById("root")
);

//unregister serviceworker
serviceWorker.unregister();




