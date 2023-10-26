import { Box, ListItem } from '@chakra-ui/react';
import { PopoverForm } from 'components/Popover/Popover';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { WarningAlert } from '../AlertDialog/AlertDialog';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';

export const ContactItem = ({ contact }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setIsDeleting(true);
  };

  return (
    <ListItem
      key={contact.id}
      paddingLeft="12px"
      paddingRight="12px"
      paddingTop="4px"
      paddingBottom="4px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="#ffffff"
      bg={'#1a1d2b'}
      borderRadius="8px"
      mb="4px"
    >
      <Box flexBasis="40%">{contact.name} </Box>
      <Box flexBasis="40%">{formatPhoneNumber(contact.number)}</Box>
      <Box
        flexBasis="20%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap={{ base: '0px', md: '0px' }}
      >
        <PopoverForm contact={contact} />
        <WarningAlert onClick={handleDelete} isDeleting={isDeleting} />
      </Box>
    </ListItem>
  );
};
