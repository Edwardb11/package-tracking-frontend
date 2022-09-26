import { createContext } from "react";

const User = createContext({
  log: false,
  setAdmin: () => {},
  user: { name: "", userId: "", email: "", rol: "" },
  setUser: () => {},
});

export default User;
