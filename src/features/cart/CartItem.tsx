import type { Cart } from "@/types";
import { formatCurrency } from "@/utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

type Props = {
  item: Cart;
};

export default function CartItem({ item }: Props): JSX.Element {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId}>{quantity}</UpdateItemQuantity>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
