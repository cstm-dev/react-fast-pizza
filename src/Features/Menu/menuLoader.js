import { getMenu } from "services/apiRestaurant.js";

async function menuLoader() {
  const menu = await getMenu();

  return menu;
}

export { menuLoader };
