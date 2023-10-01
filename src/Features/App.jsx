import Cart from "features/Cart/Cart.jsx";
import Menu from "features/Menu/Menu.jsx";
import CreateOrder from "features/Order/CreateOrder.jsx";
import Order from "features/Order/Order.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "utils/Home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:id", element: <Order /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
