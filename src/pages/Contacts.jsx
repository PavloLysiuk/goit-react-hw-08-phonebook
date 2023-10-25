import { Box, Center } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <>
      <Center>
        <Box w="500px">
          <ContactForm />
          <Box flexGrow={1}>
            <Filter />
            <ContactList />
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Contacts;
