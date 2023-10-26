import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuthLoading } from 'redux/selectors';
import { Box, Center, CircularProgress, Container } from '@chakra-ui/react';

export const Layout = () => {
  const isLoading = useSelector(selectAuthLoading);

  return (
    <Container>
      <Header />
      <Box as="main">
        <Suspense
          fallback={
            <Center>
              <CircularProgress isIndeterminate color="#ffd76d" />
            </Center>
          }
        >
          {!isLoading && <Outlet />}
        </Suspense>
      </Box>
    </Container>
  );
};
