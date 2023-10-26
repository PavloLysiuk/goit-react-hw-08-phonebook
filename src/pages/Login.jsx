import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Button,
  useToast,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { selectAuthLoading } from 'redux/selectors';
import { useState } from 'react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const schema = yup
  .object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(7),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(login(data))
      .unwrap()
      .catch(() =>
        toast({
          title: `Email or password is incorrect`,
          isClosable: true,
          position: 'top-right',
          status: 'error',
          duration: 3000,
        })
      );
  };

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      mx="auto"
      p="4"
      bg="#1a1d2b"
      borderRadius={8}
    >
      <Heading color="#ffffff">Login</Heading>

      <FormControl isInvalid={errors.email} isRequired>
        <FormLabel color="#ffffff">Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color={'#ffd76d'} />
          </InputLeftElement>
          <Input
            type="email"
            color="#ffffff"
            borderColor="#ffd76d55"
            placeholder="Enter your email"
            _placeholder={{ opacity: 0.5, color: 'inherit' }}
            {...register('email')}
            bg={'#161821'}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password} isRequired>
        <FormLabel color="#ffffff">Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            color="#ffffff"
            borderColor="#ffd76d55"
            placeholder="Enter password"
            _placeholder={{ opacity: 0.5, color: '#ffd76d' }}
            {...register('password')}
            bg={'#161821'}
          />
          <InputLeftElement pointerEvents="none">
            <LockIcon color={'#ffd76d'} />
          </InputLeftElement>
          S
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              background="transparent"
            >
              {show ? (
                <ViewOffIcon color={'#ff2e4d'} />
              ) : (
                <ViewIcon color={'#ffd76d'} />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant="outline"
        color={'#ffd76d'}
        isLoading={isLoading}
        mt="4"
      >
        Login
      </Button>

      <Button
        onClick={() => navigate('/register')}
        color={'#ffd76d'}
        variant="ghost"
      >
        Click here if you don't have an account
      </Button>
    </VStack>
  );
};

export default Login;
