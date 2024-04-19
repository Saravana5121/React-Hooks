import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";

import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import UseCallback from "./components/UseCallback";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/useReducer";
import UseEffect from "./components/UseEffect";

import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/usestate" element={<UseState />} />
      <Route path="/useref" element={<UseRef />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route path="/usecallback" element={<UseCallback />} />
      <Route path="/usecontext" element={<UseContext />} />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/usereducer" element={<UseReducer />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
