import { isValidPhone } from "helpers/helpers.js";
import { redirect } from "react-router-dom";
import { createOrder } from "services/apiRestaurant.js";

async function orderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please provide a valid phone number. We might need to contact you for delivery purposes.";
  if (Object.keys(errors).length > 0) return errors;

  const createdOrder = await createOrder(order);

  return redirect(`/order/${createdOrder.id}`);
}

export { orderAction };
