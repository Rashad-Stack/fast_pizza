import Button from "@/ui/Button";
import { useState } from "react";

export default function CreateUser(): JSX.Element {
  const [username, setUsername] = useState<string>("Rashad");

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button size="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}
