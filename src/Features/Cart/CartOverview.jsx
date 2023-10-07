import {
  getTotalPizzaPrice,
  getTotalPizzaQuantity,
} from "features/Cart/cartSlice";
import { formatCurrency } from "helpers/helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cartTotalQuantity = useSelector(getTotalPizzaQuantity);
  const cartTotalPrize = useSelector(getTotalPizzaPrice);

  if (!cartTotalQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cartTotalQuantity} pizzas</span>
        <span>{formatCurrency(cartTotalPrize)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
