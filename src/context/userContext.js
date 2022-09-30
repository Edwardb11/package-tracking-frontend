import { createContext } from "react";

const User = createContext({
  log: false,
  setAdmin: () => {},
  user: { name: "", userId: "", email: "", rol: "", staffId: "" },
  setUser: () => {},
});

export default User;
