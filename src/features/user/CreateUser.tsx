import { useState } from "react";

export default function CreateUser(): JSX.Element {
  const [username, setUsername] = useState<string>("");

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}
