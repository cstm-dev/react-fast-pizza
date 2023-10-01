import MenuItem from "features/Menu/MenuItem.jsx";
import { useLoaderData } from "react-router-dom";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
