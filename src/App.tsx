import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/contact",
      element: <Contact />,
    }
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
