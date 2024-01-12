import { useAuthIsEmailAvailable, useAuthIsUsernameAvailable } from '@domain';
import { UseFormWatch, UseFormGetFieldState } from 'react-hook-form';
import { SignUpSchema } from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
};

type ReturnValidation = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation({ watch, getFieldState }: Props): {
  usernameValidation: ReturnValidation;
  emailValidation: ReturnValidation;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavaliable ? 'Username já está em uso' : undefined,
      notReady: usernameQuery.isFetching || usernameQuery.isUnavaliable,
      isFetching: usernameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavaliable ? 'Email já está em uso' : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavaliable,
      isFetching: emailQuery.isFetching,
    },
  };
}
