import { getOrderById } from "services/apiRestaurant";

async function orderLoader({ params }) {
  const order = await getOrderById(params.orderId);

  return order;
}

export { orderLoader };
