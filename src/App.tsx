import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@/ui/Home";
import Menu from "@/features/menu/Menu";
import Cart from "@/features/cart/Cart";
import Order, { Loader as OrderLoader } from "@/features/order/Order";
import CreateOrder, {
  Action as createOrderAction,
} from "@/features/cart/CreateOrder";
import AppLayout from "@/ui/AppLayout";
import { menuLoader } from "@/utils/loaders";
import Error from "@/ui/Error";

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
        loader: OrderLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        loader: createOrderAction,
      },
    ],
  },
]);
export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
