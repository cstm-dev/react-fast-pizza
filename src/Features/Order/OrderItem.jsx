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
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
