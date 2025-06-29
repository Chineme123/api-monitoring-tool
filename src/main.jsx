import { Provider } from "./components/ui/provider";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
