import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Protfolio from "./Components/Protfolio/Protfolio";
import Notfound from "./Components/Notfound/Notfound";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "protfolio",
        element: <Protfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
