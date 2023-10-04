import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "services/apiGeocoding.js";

const initialState = {
  userName: "",
  phoneNumber: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUser: {
      prepare(userName, phoneNumber, address) {
        return { payload: { userName, phoneNumber, address } };
      },
      reducer(state, action) {
        state.userName = action.payload.userName;
        state.phoneNumber = action.payload.phoneNumber;
        state.address = action.payload.address;
      },
    },
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
});

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  return { position, address };
}

export default userSlice.reducer;
export const { createUser, updateName } = userSlice.actions;
export { fetchAddress };
