import React, { useState } from "react";
import User from "./context/userContext";
import AppRouter from "./routes/AppRouter";

const App = () => {
  // const [user,setUser]=useState()
  const usuario = { name: 'Edu', modoOscuro: true };

  return (
  <User.Provider value={usuario}>
      <AppRouter />
  </User.Provider>
  );
};

export default App;
