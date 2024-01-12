import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthScreenProps, AuthStackParamList } from '@routes';

import { useResetNavigationSuccess } from '@hooks';
import { signUpSchema, SignUpSchema } from './signUpSchema';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
  ActivityIndicator,
} from '@components';
import { useAuthSignUp } from '@domain';
import { useAsyncValidation } from './useAsyncValidation';

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  const resetParam: AuthStackParamList['SuccessScreen'] = {
    title: 'Sua conta foi criada com sucesso!',
    description: 'Agora é só fazer login na nossa plataforma',
    icon: {
      name: 'checkRound',
      color: 'success',
    },
  };

  const defaultValues: SignUpSchema = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const { control, formState, handleSubmit, watch, getFieldState } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { reset } = useResetNavigationSuccess();
  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });

  const { usernameValidation, emailValidation } = useAsyncValidation({ watch, getFieldState });

  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginTop="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{ marginBottom: 's20' }}
        RightComponent={
          usernameValidation.isFetching ? <ActivityIndicator size="small" /> : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{ marginBottom: 's20' }}
      />

      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{ marginBottom: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        errorMessage={emailValidation.errorMessage}
        boxProps={{ marginBottom: 's20' }}
        RightComponent={emailValidation.isFetching ? <ActivityIndicator size="small" /> : undefined}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ marginBottom: 's48' }}
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid || usernameValidation.notReady}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
}
