import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "utils/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

ChangeQuantity.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
};

function ChangeQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  function handleDecrease(id) {
    dispatch(decreaseQuantity(id));
  }

  function handleIncrease(id) {
    dispatch(increaseQuantity(id));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => handleDecrease(id)}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={() => handleIncrease(id)}>
        +
      </Button>
    </div>
  );
}

export default ChangeQuantity;
