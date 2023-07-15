import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {signUpSchema, SignUpSchema} from './signUpSchema';
import {Text, Button, Screen, FormTextInput} from '@components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {name: 'checkRound', color: 'success'},
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginTop="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="userName"
        label="Seu username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{marginBottom: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
}
