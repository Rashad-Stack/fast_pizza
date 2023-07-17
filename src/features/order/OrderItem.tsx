import { Cart } from "@/types";
import { formatCurrency } from "@/utils/helpers";

type Props = {
  item: Cart;
  ingredients: string[];
  isLoading: boolean;
};

export default function OrderItem({
  item,
  ingredients = [],
  isLoading,
}: Props): JSX.Element {
  const { quantity, name, totalPrice } = item;
  console.log(ingredients);
  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoading ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}
