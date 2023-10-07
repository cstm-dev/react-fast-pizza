import { deleteItem } from "features/Cart/cartSlice";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "utils/Button";

DeleteItem.propTypes = {
  id: PropTypes.number,
};

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }

  return (
    <Button type="small" onClick={() => handleDeleteItem(id)}>
      Delete
    </Button>
  );
}

export default DeleteItem;
