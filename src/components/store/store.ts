import { configureStore } from "@reduxjs/toolkit";
import externalTransferSlice from "./transfer/externalTransferSlice";

const store = configureStore({
  reducer: {
    externalUser: externalTransferSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
