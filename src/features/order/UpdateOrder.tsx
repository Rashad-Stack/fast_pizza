import Button from "@/ui/Button";
import { useFetcher } from "react-router-dom";

export default function UpdateOrder() {
  const fetcher = useFetcher();
  const isLoading = fetcher.state === "loading";
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button disabled={isLoading} size="medium">
        {isLoading ? "Updating..." : "Make priority"}
      </Button>
    </fetcher.Form>
  );
}
