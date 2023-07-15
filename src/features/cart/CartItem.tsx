import type { Cart } from "@/types";
import Button from "@/ui/Button";
import { formatCurrency } from "@/utils/helpers";

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
        <Button size="small">Delete</Button>
      </div>
    </li>
  );
}
