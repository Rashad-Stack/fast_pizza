import SearchOrder from "@/features/order/SearchOrder";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Rashad</p>
    </header>
  );
}
