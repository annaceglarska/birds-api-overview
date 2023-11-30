import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Table from "./components/table/Table";
import Top100Products from "./views/top-100-products/Top100Products";
import Start from "./views/start/Start";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/top-100-table",
        element: <Top100Products />,
      },
    ],
  },
]);
