import { HeaderNavLink } from 'components/Header/Header.styled';
import { Heading } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <>
      <HeaderNavLink to="/login">
        <Heading color="#ffffff" size="md">
          Login
        </Heading>
      </HeaderNavLink>
      <HeaderNavLink to="/register">
        <Heading color="#ffffff" size="md">
          Register
        </Heading>
      </HeaderNavLink>
    </>
  );
};
