import Button from "@/ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

export default function CreateUser(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
    setUsername("");
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
          <Button size="medium">Start ordering</Button>
        </div>
      )}
    </form>
  );
}
