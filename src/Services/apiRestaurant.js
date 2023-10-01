const API_URL = "https://react-fast-pizza-api.onrender.com/api";

async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw Error("Failed getting menu");

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
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
  }
}

async function getOrderById(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);
    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
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
  }
}

export { getMenu, createOrder, getOrderById, updateOrderById };
