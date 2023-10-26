import { Heading } from '@chakra-ui/react';
import { HeaderNavLink } from 'components/Header/Header.styled';

export const AuthNav = () => {
  return (
    <>
      <HeaderNavLink to="/login">
        <Heading color="#ffffff" size="md">Login</Heading>
      </HeaderNavLink>
      <HeaderNavLink to="/register">
        <Heading color="#ffffff" size="md">Register</Heading>
      </HeaderNavLink>
    </>
  );
};
