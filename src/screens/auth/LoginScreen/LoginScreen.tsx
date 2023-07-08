import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';

export function LoginScreen({navigation}) {

  function navigateToSignUpScreen(){
    navigation.navigate('SignUpScreen')
  }

  return (
    <Screen>
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

      <Text preset="paragraphSmall" bold color="primary" marginBottom="s40">
        Esqueci minha senha
      </Text>

      <Button preset="primary" title="Entrar" marginBottom="s20" />
      <Button onPress={navigateToSignUpScreen} preset="outline" title="Criar uma conta" />
    </Screen>
  );
}
