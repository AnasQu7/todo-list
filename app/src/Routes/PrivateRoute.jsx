import { useToast } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import Login from "./Login";


const PrivateRoute = ({children}) => {
  const {checkAuth,auth} = useContext(AuthContext);
  const toast = useToast()
  console.log("checkAuth",auth)
  useEffect(()=>{
    checkAuth()
  },[auth])
    if(!auth){
     { console.log("dhb")}
      toast({
        title : "Please login to get access",
        status : "error",
        position : "top"
      })
      return <Login/>
    }
    
    return children;


};

export default PrivateRoute;
