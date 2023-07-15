import React from 'react';
import {useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {RootStackParamList} from '../../../routes/Routes';
import {Text, Button, Screen, FormTextInput} from '@components';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange'
  });

  function submitForm() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {name: 'messageRound', color: 'primary'},
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" marginBottom="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" marginBottom="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's40'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
