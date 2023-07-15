import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchOrder() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    if (!search) return;
    navigate(`/order/${search}`);
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search order #"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
