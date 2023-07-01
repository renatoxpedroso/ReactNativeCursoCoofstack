import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';

export function SignUpScreen() {

  function submitForm(){
    //TODO implementar
  }
  return (
    <Screen>
      <Text preset="headingLarge" marginTop="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{marginBottom: 's20'}}/>
      <TextInput label="Nome completo" placeholder="Digite seu nome completo" boxProps={{marginBottom: 's20'}}/>
      <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{marginBottom: 's20'}}/>

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
        boxProps={{marginBottom: 's48'}}
      />

      <Button onPress={submitForm} title='Criar minha conta'/>
    </Screen>
  );
}
