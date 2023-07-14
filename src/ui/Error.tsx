import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

export default function Error(): JSX.Element {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  console.log(error);

  if (!isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Something went wrong 😢</h1>
        <p>{error.message}</p>
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {error.status} Page {error.statusText}😢
      </h1>
      <p>{error.error?.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
