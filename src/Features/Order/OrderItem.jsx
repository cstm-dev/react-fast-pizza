import { formatCurrency } from "helpers/helpers.js";
import PropTypes from "prop-types";

OrderItem.propTypes = {
  item: PropTypes.object,
  ingredients: PropTypes.object,
  isLoadingIngredients: PropTypes.bool,
};

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
