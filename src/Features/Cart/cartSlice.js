import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCart: [],
  priority: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.userCart.push(action.payload);
    },
    deleteItem(state, action) {
      state.userCart = state.userCart.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      const item = state.userCart.find(
        (item) => item.pizzaId === action.payload,
      );

      item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.userCart.find(
        (item) => item.pizzaId === action.payload,
      );

      item.quantity--;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.userCart = [];
    },
  },
});

function getCart(state) {
  return state.cart.userCart;
}

function getTotalPizzaQuantity(state) {
  return state.cart.userCart.reduce((acc, item) => acc + item.quantity, 0);
}

function getTotalPizzaPrice(state) {
  return state.cart.userCart.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0,
  );
}

function getPizzaById(id) {
  return (state) => {
    return state.cart.userCart.find((item) => item.pizzaId === id);
  };
}

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export { getCart, getPizzaById, getTotalPizzaPrice, getTotalPizzaQuantity };
