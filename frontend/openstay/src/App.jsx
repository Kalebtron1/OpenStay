import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./pages/Checkout";
import HomeGridAgil from "./pages/HomeAgile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/navbar.jsx";
import Payment from "./pages/Payment.jsx"; // asegúrate de tener este componente

const routes = [
  {
    path: "/",
    element: <HomeGridAgil />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
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
