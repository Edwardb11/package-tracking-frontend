import React, { useState } from "react";
import User from "./context/userContext";
import AppRouter from "./routes/AppRouter";

const App = () => {
  const [user, setUser] = useState({name:'',email:'',userId:''});
  const [log, setLog] = useState(false);

  return (
    <User.Provider value={{ user, setUser, log, setLog }}>
      <AppRouter />
    </User.Provider>
  );
};

export default App;
