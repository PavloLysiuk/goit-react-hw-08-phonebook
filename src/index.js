import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { persistor, store } from './redux/store';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/seymour-one';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyles } from 'globalStyles/GlobalStyles';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider theme={GlobalStyles}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
