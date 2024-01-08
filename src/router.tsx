import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Top100Products from "./views/top-100-products/Top100Products";
import Start from "./views/start/Start";
import RecentNotableObservationsInRegion from "./views/recent-notable-observations-in-region/RecentNotableObservationsInRegion";

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
      {
        path: "/notable-observations",
        element: <RecentNotableObservationsInRegion />,
      },
    ],
  },
]);
