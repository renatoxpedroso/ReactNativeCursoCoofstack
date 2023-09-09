import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import { Box } from '@components';
import { useAppTheme } from '@hooks';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
export interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({ onPressSend, value, ...rnTextInputProps }: TextMessageProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        borderRadius="s12"
        justifyContent="space-between"
        alignItems="center"
      >
        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray1}
          style={$textInputStyle}
          {...rnTextInputProps}
        />
        <Pressable disabled={sendIsDisabled} onPress={() => onPressSend(value || '')}>
          <Text bold color={sendIsDisabled ? 'gray2' : 'primary'}>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  flexShrink: 1,
  flexGrow: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
