import React from 'react';
import {ThemeProvider} from '@shopify/restyle'
import {SafeAreaView} from 'react-native';
import { Button } from './src/components/Button/Button';
import { theme } from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Button title='Entrar' marginTop='s20'/>
        <Button preset='outline' title='OutLine' marginTop='s20'/>
      </SafeAreaView>
    </ThemeProvider>

  );
}

export default App;