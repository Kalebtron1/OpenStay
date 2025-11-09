import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Checkout from "./pages/Checkout"

const routes = [
  {
    path: "/",
    element: (
      <p>
        Empty page, please go to the{" "}
        <a className="color-blue" href="/checkout">
          Checkout page
        </a>
      </p>
    ),
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
