import { createContext } from "react";

const User= createContext({
    log: false,
    setLog:()=>{},
    user:{},
    setUser: ()=>{}
})

export default User