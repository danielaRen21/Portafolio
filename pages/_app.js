import {
  ChakraProvider,
  withDefaultColorScheme,
  extendTheme,
} from '@chakra-ui/react';

import {SessionProvider} from 'next-auth/react';

import {store} from '../store/configureStore';
import {Provider} from 'react-redux';

const theme = extendTheme(withDefaultColorScheme({colorScheme: 'messenger'}), {
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
  fontWeights: {
    semibold: 500,
  },
});

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
