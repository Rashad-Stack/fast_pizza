import Button from "@/ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

interface Props {
  pizzaId: string;
}

export default function DeleteItem({ pizzaId }: Props) {
  const dispatch = useDispatch();
  return (
    <Button size="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
