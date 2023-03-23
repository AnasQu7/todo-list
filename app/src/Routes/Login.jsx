import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
  
  export default function Login() {
    const {toggleAuth} = useContext(AuthContext)

    const [data , setData] = useState({})
    const toast = useToast();
    const navigate = useNavigate()

    const url = process.env.REACT_APP_BASE_URL
    const handleLogin = (event)=>{
      console.log(url)
      console.log(event.target)
      event.target.Loading = true
      if(data.email!==""&&data.password!==""){
        axios({
        method: 'post',
        url: `${url}/login`,
        data: data
      }).then(function (response) {
        toast({
          title : response.data.message ,
          status : "success"
        })
        toggleAuth(response.data.token)
        navigate("/")
        
      }).catch((error)=>{
        toast({
          title : error.message ,
          status : "error"
        })
      })
    }else{
        toast({
          title : "please fill all Feilds" ,
          status : "error"
        })
    }
    }



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Don't have account? <Link to="/signup" color={'blue.400'}>Signup</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='email' type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='password' type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={(e)=>{handleLogin(e)}}
                  >
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }