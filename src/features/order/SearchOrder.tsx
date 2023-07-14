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
      />
    </form>
  );
}
