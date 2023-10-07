import ChangeQuantity from "features/Cart/ChangeQuantity";
import DeleteItem from "features/Cart/DeleteItem";
import { addItem, getPizzaById } from "features/Cart/cartSlice";
import { formatCurrency } from "helpers/helpers.js";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Button from "utils/Button.jsx";

MenuItem.propTypes = {
  pizza: PropTypes.object,
};

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const pizzaInCart = useSelector(getPizzaById(id));
  const dispatch = useDispatch();

  function handleAddToCart(e) {
    e.preventDefault();

    dispatch(
      addItem({ pizzaId: id, name: name, quantity: 1, unitPrice: unitPrice }),
    );
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24${soldOut ? " opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}

          {pizzaInCart ? (
            <div className="flex items-center gap-3 md:gap-8">
              <ChangeQuantity id={id} quantity={pizzaInCart.quantity} />
              <DeleteItem id={id} />
            </div>
          ) : !soldOut ? (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
