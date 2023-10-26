import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Button,
  useToast,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Avatar,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { signup } from 'redux/auth/authOperations';
import { selectAuthLoading } from 'redux/selectors';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const schema = yup
  .object({
    name: yup
      .string()
      .required()
      .trim()
      .min(3, 'Name must be no less than 3 characters long')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces'
      ),
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(7),
  })
  .required();

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectAuthLoading);
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
    dispatch(signup(data))
      .unwrap()
      .then(() =>
        toast({
          title: `Registration is successfully completed`,
          isClosable: true,
          position: 'top-right',
          status: 'success',
          duration: 3000,
        })
      )
      .catch(() =>
        toast({
          title: `User with this email address already exists`,
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
      <Heading color="#ffffff">Register</Heading>

      <FormControl isInvalid={errors.name} isRequired>
        <FormLabel color="#ffffff">Name</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Avatar bg="#ffd76d" size="xs" />
          </InputLeftElement>
          <Input
            type="text"
            color="#ffffff"
            borderColor="#ffd76d55"
            placeholder="Enter your name"
            _placeholder={{ opacity: 0.5, color: '#ffd76d' }}
            {...register('name')}
            bg={'#161821'}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

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
            _placeholder={{ opacity: 0.5, color: '#ffd76d' }}
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
            color="#ffffff"
            borderColor="#ffd76d55"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            _placeholder={{ opacity: 0.5, color: '#ffd76d' }}
            {...register('password')}
            bg={'#161821'}
          />
          <InputLeftElement pointerEvents="none">
            <LockIcon color={'#ffd76d'} />
          </InputLeftElement>
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
        isLoading={isLoading}
        mt="4"
        variant="outline"
        color="#ffd76d"
        borderColor={'#ffd76d55'}
        _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
        _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
      >
        Sign Up
      </Button>

      <Button
        onClick={() => navigate('/login')}
        variant="ghost"
        color={'#ffd76d'}
        _hover={{ color: '#ffffff', bg: '#ffffff10' }}
        _focus={{ color: '#ffffff', bg: '#ffffff10' }}
      >
        Click here if you already have an account
      </Button>
    </VStack>
  );
};

export default Register;
