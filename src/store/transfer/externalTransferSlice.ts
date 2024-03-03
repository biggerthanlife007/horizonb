import { IExternal } from "@/Services/transfer/Payload";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExternalUserState {
  externalUser: IExternal | null;
}

const initialState: ExternalUserState = {
  externalUser: null,
};

const externalUserSlice = createSlice({
  name: "externalUser",
  initialState,
  reducers: {
    setExternalUserData: (state, action: PayloadAction<IExternal>) => {
      state.externalUser = action.payload;
    },
  },
});

export const { setExternalUserData } = externalUserSlice.actions;

export default externalUserSlice.reducer;
