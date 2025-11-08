import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Checkout from "./pages/Checkout"

const routes = [
  {
    path: "/",
    element: <p>Placeholder</p>,
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
