import { useSelector } from "react-redux";

export const useAccounts = () => useSelector((state) => state.auth.accounts);

export const useAccount = () =>
  useSelector((state) => state.auth.currentAccount);
