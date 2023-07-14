import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "@/features/cart/CartOverview";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";

export default function AppLayout() {
  const [progress, setProgress] = useState<number>(0);
  const { state } = useNavigation();

  useEffect(() => {
    if (state === "loading") {
      setProgress(40);
    } else if (state === "idle") {
      setProgress(100);
    } else {
      setProgress(0);
    }
  }, [state]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </>
  );
}
