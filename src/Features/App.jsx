import Cart from "features/Cart/Cart.jsx";
import Menu from "features/Menu/Menu.jsx";
import { menuLoader } from "features/Menu/menuLoader";
import CreateOrder from "features/Order/CreateOrder.jsx";
import Order from "features/Order/Order.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "utils/AppLayout.jsx";
import Error from "utils/Error.jsx";
import Home from "utils/Home.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:id", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
