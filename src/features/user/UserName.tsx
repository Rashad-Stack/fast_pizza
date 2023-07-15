import type { RootState } from "@/types";
import { useSelector } from "react-redux";
export default function UserName() {
  const { name } = useSelector((state: RootState) => state.user);

  if (!name) return null;

  return <p className="hidden text-sm font-semibold md:block">{name}</p>;
}
