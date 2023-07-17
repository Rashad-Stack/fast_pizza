import { getAddress } from "@/services/apiGeocoding";
import type { UserAction, UserState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Position = {
  latitude: number;
  longitude: number;
};

function getPosition(): Promise<Position> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      resolve({ latitude, longitude });
    }, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position: Position = {
      latitude: positionObj.latitude,
      longitude: positionObj.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it in the order form, allowing the user to correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

const initialState: UserState = {
  name: "",
  status: "idle",
  position: {} as Position,
  address: "",
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state: UserState, action: { payload: string }) {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAddress.pending, (state: UserState) => {
      state.status = "loading";
      state.error = undefined;
    });
    builder.addCase(
      fetchAddress.fulfilled,
      (state: UserState, action: UserAction) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      },
    );
    builder.addCase(fetchAddress.rejected, (state: UserState) => {
      state.status = "error";
      state.error =
        "There was a problem getting your address😢 Make sure to fill this field.";
    });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
