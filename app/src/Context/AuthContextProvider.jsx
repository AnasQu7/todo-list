import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [token , setToken] = useState("");
  const [auth , setAuth] = useState(false)
 const toggleAuth = (x)=>{
    setToken(x)
  }
  const checkAuth = () =>{
    const url = process.env.REACT_APP_BASE_URL
    axios.get(`${url}/checkauth`,{
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
    },
    }).then((res)=>{
      console.log(res.data)
      setAuth(true)
      
    }).catch((e)=>{
      console.log(e)
      setAuth(false)
    })
  }
  return (
    <AuthContext.Provider value={{checkAuth,auth,token,toggleAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
