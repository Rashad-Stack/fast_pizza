import { useSelector } from "react-redux";
import CreateUser from "@/features/user/CreateUser";

import type { RootState } from "@/types";
import Button from "./Button";

export default function Home(): JSX.Element {
  const { name } = useSelector((state: RootState) => state.user);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {name === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" size="medium">
          Continue ordering, {name}
        </Button>
      )}
    </div>
  );
}
