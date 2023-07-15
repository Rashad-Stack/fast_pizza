import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function Error(): JSX.Element {
  const error = useRouteError() as Error;

  console.log(error);

  if (!isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Something went wrong 😢</h1>
        <p>{error.message}</p>
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {error.status} Page {error.statusText}😢
      </h1>
      <p>{error.error?.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
