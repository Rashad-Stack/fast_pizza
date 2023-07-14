import { Cart } from "@/types";
import { formatCurrency } from "@/utils/helpers";

type Props = {
  isLoadingIngredients: boolean;
  ingredients: string;
  item: Cart;
};

export default function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: Props): JSX.Element {
  const { quantity, name, totalPrice } = item;
  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
