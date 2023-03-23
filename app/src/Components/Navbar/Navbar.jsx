import { Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <Flex fontWeight={'bold'} fontFamily={'cursive'} justifyContent={"space-between"} alignItems={"center"} py={2} px={5} bg={'blue.400'}>
     <Text onClick={()=>{navigate("/")}}>TODO LIST</Text>
     <Flex gap={5}>
        <Button onClick={()=>{navigate("/login")}}>Login</Button>
        
        <Button onClick={()=>{navigate("/signup")}}>Signup</Button>
     </Flex>
    </Flex>
  )
}

export default Navbar