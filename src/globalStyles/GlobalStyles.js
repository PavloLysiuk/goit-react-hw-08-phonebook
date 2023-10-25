import 'modern-normalize';
import { extendTheme } from '@chakra-ui/react';
export const GlobalStyles = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#161821',
      },
    }),
  },
});
