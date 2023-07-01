import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {Box} from './src/components/Box/Box';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá!
          </Text>
          <Text marginBottom="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{marginBottom: 's20'}}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon color="gray2" name="eyeOn" />}
            boxProps={{marginBottom: 's10'}}
          />

          <Text
            preset="paragraphSmall"
            bold
            color="primary"
            marginBottom="s40">
            Esqueci minha senha
          </Text>

          <Button preset="primary" title="Entrar" marginBottom="s20" />
          <Button preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
