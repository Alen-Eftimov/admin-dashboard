// import Navbar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import New from "./pages/new/New.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import Login from "./pages/login/Login.jsx";
// import Widget from "./components/widget/Widget";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useContext } from "react";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";

const Layout = () => {
  return (
    <div>
      {/* <Navbar />
      <Sidebar /> */}
      <Outlet />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/users',
        element: <List />
      },
      {
        path: '/users/:userId',
        element: <Single />
      },
      {
        path: '/users/new',
        element: <New inputs={userInputs} title="Add New User" />,
      },
      {
        path: '/products',
        element: <List />
      },
      {
        path: '/products/:productId',
        element: <Single />
      },
      {
        path: '/products/new',
        element: <New inputs={productInputs} title="Add New Product" />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* <Home /> */}
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      {/* <Widget /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
