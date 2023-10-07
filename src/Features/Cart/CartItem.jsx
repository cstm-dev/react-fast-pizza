import { formatCurrency } from "helpers/helpers.js";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChangeQuantity from "./ChangeQuantity";
import DeleteItem from "./DeleteItem";
import { getPizzaById } from "./cartSlice";

CartItem.propTypes = {
  item: PropTypes.object,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;
  const totalPrice = quantity * unitPrice;
  const pizzaInCart = useSelector(getPizzaById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <ChangeQuantity id={pizzaId} quantity={pizzaInCart.quantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
