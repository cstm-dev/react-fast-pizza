import { getOrderById } from "services/apiRestaurant";

async function orderLoader({ params }) {
  try {
    const order = await getOrderById(params.orderId);

    return order;
  } catch (err) {
    console.error(err.message);
  }
}

export { orderLoader };
