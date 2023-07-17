import type { Cart, RootState } from "@/types/index";
import Button from "@/ui/Button";
import LinkButton from "@/ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart } from "./cartSlice";

export default function Cart(): JSX.Element {
  const { name } = useSelector((state: RootState) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {name}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button size="medium" to="/order/new">
          Order pizzas
        </Button>
        <Button
          type="reset"
          size="transparent"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}
