import { updateOrderById } from "services/apiRestaurant";

async function updateOrderAction({ params }) {
  try {
    const data = { priority: true };
    await updateOrderById(params.orderId, data);

    return null;
  } catch (err) {
    console.error(err.message);
  }
}

export { updateOrderAction };
