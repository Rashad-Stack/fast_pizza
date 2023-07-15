import SearchOrder from "@/features/order/SearchOrder";
import UserName from "@/features/user/UserName";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-around border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-semibold">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
