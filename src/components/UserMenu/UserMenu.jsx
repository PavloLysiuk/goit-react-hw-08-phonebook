import { Avatar, Button, Flex, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectAuthLoading, selectUserName } from 'redux/selectors';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);

  return (
    <>
      <Flex gap={2} alignItems="center">
        <Avatar bg="#ffd76d" size="sm" />
        <Heading color="#ffffff" size="md">
          {userName}
        </Heading>
      </Flex>

      <Button
        type="button"
        onClick={() => dispatch(logout())}
        variant="outline"
        isLoading={isLoading}
        color="#ffd76d"
        borderColor={'#ffd76d55'}
        _hover={{ color: '#1a1d2b', bg: '#ffd76d' }}
        _focus={{ color: '#1a1d2b', bg: '#ffd76d' }}
      >
        Log out
      </Button>
    </>
  );
};
