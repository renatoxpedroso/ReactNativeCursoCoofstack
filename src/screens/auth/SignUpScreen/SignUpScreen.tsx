import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthScreenProps, AuthStackParamList } from '@routes';

import { useResetNavigationSuccess } from '@hooks';
import { signUpSchema, SignUpSchema } from './signUpSchema';

import { Text, Button, Screen, FormTextInput, FormPasswordInput } from '@components';
import { useAuthSignUp } from '@domain';

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

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
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
        boxProps={{ marginBottom: 's20' }}
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
        boxProps={{ marginBottom: 's20' }}
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
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
}
