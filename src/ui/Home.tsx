import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <Link to="/menu">Go to menu</Link>
    </div>
  );
}
