import { getMenu } from "services/apiRestaurant.js";

async function menuLoader() {
  try {
    const menu = await getMenu();

    return menu;
  } catch (err) {
    console.error(err.message);
  }
}

export { menuLoader };
