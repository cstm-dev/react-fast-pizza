import Cart from "features/Cart/Cart.jsx";
import Menu from "features/Menu/Menu.jsx";
import { menuLoader } from "features/Menu/menuLoader";
import CreateOrder from "features/Order/CreateOrder.jsx";
import Order from "features/Order/Order.jsx";
import { orderAction } from "features/Order/orderAction.js";
import { orderLoader } from "features/Order/orderLoader.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "utils/AppLayout.jsx";
import Error from "utils/Error.jsx";
import Home from "utils/Home.jsx";
import { updateOrderAction } from "./Order/updateOrderAction";

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
      { path: "/order/new", element: <CreateOrder />, action: orderAction },
      {
        path: "/order/:orderId",
        element: <Order />,
        action: updateOrderAction,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
