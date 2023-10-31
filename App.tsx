import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './src/routes/Routes';
import { Toast } from '@components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthCredentialsProvider, MMKVStorage, initiaalizeStorage } from '@services';

const queryClient = new QueryClient();

initiaalizeStorage(MMKVStorage);

function App(): JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
