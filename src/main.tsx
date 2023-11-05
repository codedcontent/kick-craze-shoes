import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage.tsx";
import ProductPage, {
  loader as ProductParamsLoader,
} from "./components/products/ProductPage.tsx";
import LandingPage from "./LandingPage.tsx";
import MainAppLayout from "./components/layouts/MainAppLayout.tsx";
import Products from "./components/products/Products.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    element: <MainAppLayout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
        loader: ProductParamsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
