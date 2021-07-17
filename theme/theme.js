import { extendTheme } from '@chakra-ui/react';
import '@fontsource/josefin-sans';

const Theme = extendTheme({
  fonts: {
    body: 'Josefin Sans, sans-serif',
  },
  colors: {
    theme: {
      featured: '#A3A948',
    },
  },
});

export default Theme;
