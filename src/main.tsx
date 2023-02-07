import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { ChakraProvider, ColorModeScript, Button } from '@chakra-ui/react';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import './styles/main.scss';
import { store } from './store/store';
import { Provider } from 'react-redux';

const config: ThemeConfig = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
);
