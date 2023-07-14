import type { Cart } from "@/types";
import { formatCurrency } from "@/utils/helpers";

type Props = {
  item: Cart;
};

export default function CartItem({ item }: Props): JSX.Element {
  const { pizzaId, name, quantity, totalPrice } = item;
  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
