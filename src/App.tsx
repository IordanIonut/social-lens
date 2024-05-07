import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies(["try_good"]);

  useEffect(() => {
    const date1 = new Date();
    const date2 = new Date(cookies?.try_good?.date);

    if (
      cookies?.try_good?.value === undefined ||
      date1.getFullYear() > date2.getFullYear() ||
      (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() > date2.getMonth()) ||
      (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() > date2.getDate())
    ) {
      const value = {
        value: 0,
        date: new Date(),
      };
      setCookie("try_good", value);
    }
  },);

  const updateCookieValue = (newValue: number) => {
    const currentValue =
      cookies.try_good !== undefined
        ? cookies.try_good
        : { value: 0, date: new Date() };
    setCookie("try_good", { ...currentValue, value: newValue });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cookies={cookies} updateCookieValue={updateCookieValue} />,
    },
    {
      path: "/about",
      element: (
        <About cookies={cookies} updateCookieValue={updateCookieValue} />
      ),
    },
    {
      path: "/service",
      element: (
        <Service cookies={cookies} updateCookieValue={updateCookieValue} />
      ),
    },
    {
      path: "/contact",
      element: (
        <Contact cookies={cookies} updateCookieValue={updateCookieValue} />
      ),
    },
  ]);

  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <RouterProvider router={router} />
    </CookiesProvider>
  );
}

export default App;
