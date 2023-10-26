import { Flex, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectAuthLoading, selectUserName } from 'redux/selectors';
import { MdLogout } from 'react-icons/md';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);

  return (
    <>
      <Flex gap={2} alignItems="center">
        {/* <IoMdContact color="#ffd76d" size={40} /> */}
        <Heading color="#ffd76d" size="md">
          {userName}
        </Heading>
      </Flex>

      <MdLogout
        size={28}
        onClick={() => dispatch(logout())}
        variant="outline"
        isLoading={isLoading}
        cursor={'pointer'}
        color="#ffffff"
      />
    </>
  );
};
