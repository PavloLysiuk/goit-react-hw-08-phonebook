import { useNavigate } from 'react-router-dom';
import { IoIosContacts } from 'react-icons/io';

const { Heading, Center, Flex, Button, Box } = require('@chakra-ui/react');

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box mx="auto" p="4" bg="#1a1d2b" borderRadius={8}>
        <Center height="100%" flexDirection="column" p={16}>
          <IoIosContacts size={80} color="#ffd76d" />
          <Heading color="#ffffff" mb={12}>
            PHONEBOOK
          </Heading>

          <Flex gap={2}>
            <Button
              type="button"
              onClick={() => navigate('/login')}
              variant="outline"
              color="#ffd76d"
              borderColor={'#ffd76d55'}
              _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
              _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
            >
              Login
            </Button>
            <Button
              type="button"
              onClick={() => navigate('/register')}
              variant="outline"
              color="#ffd76d"
              borderColor={'#ffd76d55'}
              _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
              _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
            >
              Register
            </Button>
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default Home;
