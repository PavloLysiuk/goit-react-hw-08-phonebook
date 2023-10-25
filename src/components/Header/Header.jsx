import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectAuthLoading, selectIsLoggedIn } from 'redux/selectors';
import { HeaderNav, HeaderNavLink } from './Header.styled';
import { MobileMenu } from 'components/Drawer/Drawer';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectAuthLoading);

  return (
    <Flex
      as="header"
      alignItems="center"
      mb={6}
      bg={'#1a1d2b'}
      css={{
        borderRadius: '0 0 8px 8px',
      }}
      p={4}
      gap={22}
      h="70px"
    >
      <HeaderNav className="navigation">
        {!isLoggedIn && !isLoading ? (
          <HeaderNavLink to="/">
            <Heading size="md">Home</Heading>
          </HeaderNavLink>
        ) : (
          <HeaderNavLink to="/contacts">
            <Heading size="md">Contacts</Heading>
          </HeaderNavLink>
        )}
      </HeaderNav>

      <Spacer />

      <Flex display={{ base: 'none', md: 'flex' }} alignItems="center" gap={3}>
        {!isLoggedIn && !isLoading ? <AuthNav /> : <UserMenu />}
      </Flex>

      <Box display={{ md: 'none' }}>
        <MobileMenu>
          <Flex flexDirection="column" gap={3} alignItems="flex-start">
            {isLoggedIn && !isLoading ? <UserMenu /> : <AuthNav />}
          </Flex>
        </MobileMenu>
      </Box>
    </Flex>
  );
};
