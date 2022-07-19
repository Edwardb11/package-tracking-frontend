import { createContext } from "react";

const User = createContext({
  log: false,
  setLog: () => {},
  user: { name: "", userId: "", email: "" },
  setUser: () => {},
});

export default User;
