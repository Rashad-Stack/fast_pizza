import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@/ui/Home";
import Menu from "@/features/menu/Menu";
import Cart from "@/features/cart/Cart";
import Order from "@/features/order/Order";
import AppLayout from "@/ui/AppLayout";
import { actionLoader, menuLoader, orderLoader } from "@/utils/loaders";
import Error from "@/ui/Error";
import CreateOrder from "./features/order/CreateOrder";

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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionLoader,
      },
    ],
  },
]);
export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
