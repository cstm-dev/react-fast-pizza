import { clearCart } from "features/Cart/cartSlice";
import store from "features/store";
import { isValidPhone } from "helpers/helpers.js";
import { redirect } from "react-router-dom";
import { createOrder } from "services/apiRestaurant.js";

async function orderAction({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === "true",
    };

    const errors = {};
    if (!isValidPhone(order.phone))
      errors.phone =
        "Please provide a valid phone number. We might need to contact you for delivery purposes.";
    if (Object.keys(errors).length > 0) return errors;

    const createdOrder = await createOrder(order);

    store.dispatch(clearCart());

    return redirect(`/order/${createdOrder.id}`);
  } catch (err) {
    console.error(err.message);
  }
}

export { orderAction };
