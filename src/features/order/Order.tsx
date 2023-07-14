import { getOrder } from "@/services/apiRestaurant";
import { Order as OrderType } from "@/types";
import { calcMinutesLeft, formatCurrency, formatDate } from "@/utils/helpers";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export default function Order(): JSX.Element {
  const order = useLoaderData() as OrderType;
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { status, priority, priorityPrice, orderPrice, estimatedDelivery } =
    order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function Loader({ params }: LoaderFunctionArgs) {
  const orderId = params.orderId as string;
  const order = await getOrder(orderId);
  return order;
}
