import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Checkout from "./pages/Checkout"
import HomeGridAgil from "./pages/HomeAgile"
import Login from "./pages/Login"
import Register from "./pages/Register"

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
]

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
