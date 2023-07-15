import { Cart } from "@/types";
import { formatCurrency } from "@/utils/helpers";

type Props = {
  item: Cart;
};

export default function OrderItem({ item }: Props): JSX.Element {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
