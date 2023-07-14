import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import type { Food } from "@/types";

export default function Menu(): JSX.Element {
  const menu = useLoaderData() as Food[];

  return (
    <ul>
      {menu?.map((pizza: Food) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
