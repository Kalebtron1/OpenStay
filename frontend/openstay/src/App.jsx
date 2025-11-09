import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Checkout from "./pages/Checkout";
import HomeGridAgil from "./pages/HomeAgile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/navbar.jsx";
import Payment from "./pages/Payment.jsx";

const routes = [
  { path: "/", element: <HomeGridAgil /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/payment", element: <Payment /> },
];

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
