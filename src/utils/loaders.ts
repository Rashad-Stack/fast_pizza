import store from "@/app/store";
import { clearCart } from "@/features/cart/cartSlice";
import {
  createOrder,
  getMenu,
  getOrder,
  updateOrder,
} from "@/services/apiRestaurant";
import { Order, PatchOrder } from "@/types";
import { LoaderFunctionArgs, Params, redirect } from "react-router-dom";
import { isValidPhone } from "./helpers";

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export async function actionLoader({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const cart = JSON.parse(data.cart.toString());

  const order: Order = {
    customer: data.customer.toString(),
    phone: data.phone.toString(),
    address: data.address.toString(),
    cart,
    priority: data.priority === "true",
    estimatedDelivery: new Date(),
    position: data.position.toString(),
  };

  const errors = {} as Error;

  if (!isValidPhone(order.phone)) {
    errors.message = "Invalid phone number! Please enter a valid phone number.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // If is everything okay create new order and redirect
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export async function orderLoader({ params }: LoaderFunctionArgs) {
  const orderId = params.orderId as string;
  const order = await getOrder(orderId);

  return order;
}

export async function actionUpdateOrder({ params }: { params: Params }) {
  const data: PatchOrder = {
    priority: true,
  };

  await updateOrder(params.orderId, data);

  return null;
}
