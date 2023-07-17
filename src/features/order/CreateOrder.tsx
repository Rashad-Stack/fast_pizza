import type { RootState } from "@/types";
import Button from "@/ui/Button";
import { formatCurrency } from "@/utils/helpers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import EmptyCart from "../cart/EmptyCart";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

export default function CreateOrder() {
  const {
    name,
    position,
    address,
    status: addressStatus,
    error: addressError,
  } = useSelector((state: RootState) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const formError: Error = useActionData() as Error;
  const totalCartPrice = useSelector(getTotalCartPrice);
  const [withPriority, setWithPriority] = useState<boolean>(false);
  const isSubmitting: boolean = navigation.state === "submitting";
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            defaultValue={name}
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formError?.message && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-center text-xs text-red-700">
                {formError.message}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className=" grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-center text-xs text-red-700">
                {addressError}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && !isLoadingAddress && (
            <span className="absolute right-[3px] top-[3px] z-10 md:right-[5px] md:top-[5px]">
              <Button
                type="button"
                size="small"
                disabled={isLoadingAddress}
                onClick={() => dispatch(fetchAddress())}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400  focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            value={withPriority.toString()}
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />

          <Button size="medium" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
