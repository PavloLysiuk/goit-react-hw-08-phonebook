import { useNavigate } from 'react-router-dom';
import { IoIosContacts } from 'react-icons/io';

const { Heading, Center, Flex, Button, Box } = require('@chakra-ui/react');

const Home = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <Flex m={0} p={0}>
        <Box
          mx="auto"
          p="4"
          bg="#1a1d2b"
          borderRadius={8}
        >
          <Center height="100%" flexDirection="column" p={16}>
            <IoIosContacts size={80} color="#ffd76d" />
            <Heading mb={12}>PHONEBOOK</Heading>

            <Flex gap={2}>
              <Button
                type="button"
                onClick={() => navigate('/login')}
                bg="#ffd76d"
              >
                Login
              </Button>
              <Button
                type="button"
                onClick={() => navigate('/register')}
                color="#ffd76d"
                variant="outline"
              >
                Register
              </Button>
            </Flex>
          </Center>
        </Box>
      </Flex>
    </Center>
  );
};

export default Home;
