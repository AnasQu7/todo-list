import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [data , setData] = useState({})
    const toast = useToast();
    const navigate = useNavigate()

    const url = process.env.REACT_APP_BASE_URL
    const handleSignup = (event)=>{
      console.log(url)
      console.log(event.target)
      event.target.Loading = true
      if(data.phone!==""&&data.email!==""&&data.address!==""&&data.password0!==""&&data.name!==""){
        axios({
        method: 'post',
        url: `${url}/signup`,
        data: data
      }).then(function (response) {
        toast({
          title : response.data.message ,
          status : "success"
        })
        navigate("/login")
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id='name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='name' type="text" />
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input  onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='address' type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired id="lastName">
                    <FormLabel>Phone</FormLabel>
                    <Input  onChange={(e)=>{setData({...data,[e.target.name]: +e.target.value})}} maxLength={10} name="phone" type="number" appearance={'textarea'} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input  onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='email' type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input  onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='password' type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={(e)=>{handleSignup(e)}}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login" color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }