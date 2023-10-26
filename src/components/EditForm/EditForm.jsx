import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'components/ContactForm/ContactForm';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';

export const EditForm = ({ onCancel, contact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const contacts = useSelector(selectContacts);
  const toast = useToast();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const { name, number } = data;

    if (contact.name === name && contact.number === number) {
      return onCancel();
    }
    if (
      contacts.find(
        contactInList =>
          contactInList.name.toLowerCase() === name.toLowerCase() &&
          contactInList.name.toLowerCase() !== contact.name.toLowerCase()
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
    if (
      contacts.find(
        contactInList =>
          contactInList.number === number &&
          contactInList.number !== contact.number
      )
    ) {
      return toast({
        title: `${number} is already in contacts`,
        isClosable: true,
        position: 'top-right',
        status: 'info',
        duration: 3000,
      });
    }
    dispatch(updateContact({ id: contact.id, body: { name, number } }))
      .unwrap()
      .then(() => {
        toast({
          title: `Contact updated`,
          isClosable: true,
          position: 'top-right',
          status: 'success',
          duration: 3000,
        });
        onCancel();
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
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} p={4}>
      <FormControl isInvalid={errors.name} isRequired>
        <FormLabel color="#ffffff">Name</FormLabel>
        <Input
          color="#ffffff"
          type="text"
          {...register('name')}
          defaultValue={contact?.name}
          bg={'#161821'}
        />
      </FormControl>

      <FormControl isInvalid={errors.number} isRequired>
        <FormLabel color="#ffffff">Phone</FormLabel>
        <Input
          color="#ffffff"
          type="tel"
          {...register('number')}
          defaultValue={contact?.number}
          bg={'#161821'}
        />
      </FormControl>

      <ButtonGroup display="flex" justifyContent="flex-end" mt="8px">
        <Button
          isLoading={isSubmitting}
          type="submit"
          isDisabled={!isValid}
          variant="outline"
          color="#ffd76d"
          borderColor={'#ffd76d55'}
          _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
          _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
        >
          Save
        </Button>
        <Button
          onClick={onCancel}
          variant="outline"
          color="#ffd76d"
          borderColor={'#ffd76d55'}
          _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
          _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </VStack>
  );
};
