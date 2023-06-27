import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaView} from 'react-native';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import { Icon } from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Button title="Entrar" marginTop="s20" />
        <Button loading title="Entrar" marginTop="s20" />
        <Button disabled preset="outline" title="OutLine" marginTop="s20" />

        <Icon name='eyeOff' color='grayBlack' size={50}/>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
