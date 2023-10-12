import React from 'react';

import { useForm } from 'react-hook-form';
import { AuthScreenProps } from '@routes';

import { zodResolver } from '@hookform/resolvers/zod';

import { Text, Button, Screen, FormTextInput, FormPasswordInput } from '@components';
import { loginSchema, LoginSchema } from './loginSchema';
import { useAuthSignIn } from '@domain';
import { useToastService } from '@services';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { showToast } = useToastService();
  const { isLoading, signIn } = useAuthSignIn({
    onError: (message) => showToast({ message, type: 'error' }),
  });
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({ email, password }: LoginSchema) {
    signIn({ email, password });
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ marginBottom: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ marginBottom: 's20' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        bold
        color="primary"
        marginBottom="s40"
      >
        Esqueci minha senha
      </Text>

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        preset="primary"
        title="Entrar"
        marginBottom="s20"
      />

      <Button onPress={navigateToSignUpScreen} preset="outline" title="Criar uma conta" />
    </Screen>
  );
}
