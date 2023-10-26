import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts, selectContactsLoading } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { useToast } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';

export const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be no less than 3 characters long')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces'
      ),
    number: yup
      .string()
      .required('Number is required')
      .transform(currentValue => currentValue.replace(/\D+/g, ''))
      .min(7, 'Number phone must be no less than 7 characters long')
      .max(12, 'Number phone must be no more than 12 digits'),
  })
  .required();

export const ContactForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);

  const toast = useToast();
  useEffect(() => {
    if (!isLoading) {
      setIsClicked(false);
    }
  }, [isLoading]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, number }) => {
    setIsClicked(true);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast({
        title: `${name} is already in contacts`,
        isClosable: true,
        position: 'top-right',
        status: 'info',
        duration: 3000,
      });
    }
    if (contacts.find(contact => contact.number === number)) {
      return toast({
        title: `Number: ${number} is already in contacts`,
        isClosable: true,
        position: 'top-right',
        status: 'info',
        duration: 3000,
      });
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast({
          title: `${name} is added to contacts`,
          isClosable: true,
          position: 'top-right',
          status: 'success',
          duration: 3000,
        });
      })
      .catch(() =>
        toast({
          title: `Something went wrong. Please try again later`,
          isClosable: true,
          position: 'top-right',
          status: 'error',
          duration: 3000,
        })
      );
    reset();
  };

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      mx="auto"
      justifyContent="center"
      mb={6}
      maxH="fit"
      p={4}
      bg="#1a1d2b"
      borderRadius="8px"
    >
      <FormControl isInvalid={errors.name} isRequired>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdContact color="#ffd76d" size={24} />
          </InputLeftElement>
          <Input
            type="text"
            color="#ffffff"
            borderColor="#ffd76d55"
            placeholder="Full Name (Example: Pavlo Lysiuk)"
            _placeholder={{ opacity: 0.5, color: '#ffd76d' }}
            {...register('name')}
            bg={'#161821'}
            _hover={{ borderColor: '#ffd76d' }}
            _focus={{ borderColor: '#ffd76d' }}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.number} isRequired>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color={'#ffd76d'} />
          </InputLeftElement>
          <Input
            color="#ffffff"
            type="tel"
            borderColor="#ffd76d55"
            placeholder="Phone number (Example: XXXXXXX)"
            _placeholder={{ opacity: 0.5, color: '#ffd76d' }}
            {...register('number')}
            bg={'#161821'}
            _hover={{ borderColor: '#ffd76d' }}
            _focus={{ borderColor: '#ffd76d' }}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.number && errors.number.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        isLoading={isLoading && isClicked}
        variant="outline"
        color="#ffd76d"
        borderColor={'#ffd76d55'}
        _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
        _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
        mt="2px"
      >
        Add contact
      </Button>
    </VStack>
  );
};
