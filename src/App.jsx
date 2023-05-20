import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";
import Blogs from "./pages/Blogs";
import AddAToy from "./pages/AddAToy";
import Alltoy from "./pages/Alltoy";
import ToyDetails from "./pages/ToyDetails";
import MyToys from "./pages/MyToys";
import EditToy from "./pages/EditToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/addtoy",
        element: <AddAToy />,
      },
      {
        path: "/toy",
        element: <Alltoy />,
      },
      {
        path: "/toy/:id",
        element: <ToyDetails />,
      },
      {
        path: "/mytoy",
        element: <MyToys />,
      },
      {
        path: "/edit/:id",
        element: <EditToy />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
