import EmptyCart from "features/Cart/EmptyCart";
import { getCart, getTotalPizzaPrice } from "features/Cart/cartSlice";
import { fetchCustomerAddress, getUser } from "features/User/userSlice";
import { formatCurrency } from "helpers/helpers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "utils/Button.jsx";

function CreateOrder() {
  const [isPriority, setIsPriority] = useState(0);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector(getUser);
  const addressIsLoading = addressStatus === "loading";
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const cartTotalPrize = useSelector(getTotalPizzaPrice);
  const priorityPrize = isPriority ? cartTotalPrize * 0.2 : 0;
  const priceToPay = cartTotalPrize + priorityPrize;

  if (cart.length === 0) return <EmptyCart />;

  function handlePosition(e) {
    e.preventDefault();
    dispatch(fetchCustomerAddress());
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input flex-1"
            type="text"
            name="customer"
            defaultValue={userName}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="flex-1">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors?.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="flex-1">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={addressIsLoading}
              defaultValue={address}
              required
            />
            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {addressError}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="absolute right-1 top-[35px] z-10 sm:top-[3px] md:right-2 md:top-1.5">
              <Button
                type="small"
                onClick={handlePosition}
                disabled={addressIsLoading}
              >
                Get Position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={isPriority}
            onChange={(e) => setIsPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={`${position.latitude}, ${position.longitude}`}
          />
          <Button type="primary" disabled={isSubmitting || addressIsLoading}>
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(priceToPay)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
