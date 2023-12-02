import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "Gökhan Ekici",
    fullname: "ekicigokhann",
    avatar:
      "https://pbs.twimg.com/profile_images/1659155478960545792/lpbDP8Pr_normal.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "Gökhan Ekici",
      fullname: "ekicigokhann",
      avatar:
        "https://pbs.twimg.com/profile_images/1659155478960545792/lpbDP8Pr_normal.jpg",
    },
    {
      id: 2,
      username: "Mauro İcardi",
      fullname: "mauroicardi",
      avatar:
        "https://pbs.twimg.com/profile_images/1623097607340843010/j47wLc3L_400x400.jpg",
    },
    {
      id: 3,
      username: "Kerem Aktürkoğlu",
      fullname: "keremakturkoglu",
      avatar:
        "https://pbs.twimg.com/profile_images/1650808544956956673/pEk2LEfU_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        state.currentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
