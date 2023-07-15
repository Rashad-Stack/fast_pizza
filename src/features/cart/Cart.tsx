import type { Cart, RootState } from "@/types/index";
import { useSelector } from "react-redux";
import Button from "@/ui/Button";
import LinkButton from "@/ui/LinkButton";
import { useState } from "react";
import CartItem from "./CartItem";

export default function Cart(): JSX.Element {
  const { name } = useSelector((state: RootState) => state.user);
  const [cart] = useState<Cart[]>(fakeCart);
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
        <Button size="transparent">Clear cart</Button>
      </div>
    </div>
  );
}

const fakeCart: Cart[] = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
