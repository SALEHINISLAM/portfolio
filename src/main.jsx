import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Components/Errorpage/ErrorPage.jsx";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import MyWork from "./Components/MyWork/MyWork.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Services from "./Components/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <MyWork />,
      },
      {
        path:'/testimonials',
        element:<Testimonials/>
      },
      {
        path:'/services',
        element:<Services/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
