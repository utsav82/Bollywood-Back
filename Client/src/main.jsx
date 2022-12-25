import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataLayer from "./utils/data_layer";
import reducer from "./utils/reducer";
import { initialState } from "./utils/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
