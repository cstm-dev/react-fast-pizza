import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress, getPosition } from "services/apiGeocoding.js";

const initialState = {
  userName: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCustomerAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomerAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchCustomerAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

function getUser(state) {
  return state.user;
}

const fetchCustomerAddress = createAsyncThunk(
  "user/fetchCustomerAddress",
  async () => {
    try {
      const positionObj = await getPosition();
      const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      };

      const addressObj = await getAddress(position);
      const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

      return { position, address };
    } catch (err) {
      console.error(err.message);
      throw new Error("Unable to get current position");
    }
  },
);

export default userSlice.reducer;
export const { updateName } = userSlice.actions;
export { fetchCustomerAddress, getUser };
