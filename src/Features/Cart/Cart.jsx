import CartItem from "features/Cart/CartItem";
import EmptyCart from "features/Cart/EmptyCart";
import { clearCart, getCart } from "features/Cart/cartSlice";
import { getUser } from "features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "utils/Button";
import LinkButton from "utils/LinkButton";

function Cart() {
  const cart = useSelector(getCart);
  const { userName } = useSelector(getUser);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
