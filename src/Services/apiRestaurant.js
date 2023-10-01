const API_URL = "https://react-fast-pizza-api.onrender.com/api";

async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw Error("Failed getting menu");

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Couldn't get the menu");
  }
}

async function createOrder(order) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
    throw new Error("Couldn't create the order");
  }
}

async function getOrderById(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);
    const { data } = await res.json();

    if (res.status === 404) throw new Error("No order with this ID");

    return data;
  } catch (err) {
    console.error(err.message);
    throw new Error("Couldn't get the order");
  }
}

async function updateOrderById(id, updatedOrder) {
  try {
    await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return `Successfully updated order id ${id}`;
  } catch (err) {
    console.error(err.message);
    throw new Error("Couldn't update the order");
  }
}

export { createOrder, getMenu, getOrderById, updateOrderById };
