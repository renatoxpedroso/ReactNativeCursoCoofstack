import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box, TouchableOpacityBox, Icon, Text, BoxProps } from '@components';
import { useAppTheme, useAppSafeArea } from '@hooks';

import { ScrollViewContainer, ViewContainer } from './components/ScrollViewContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();
  const navigation = useNavigation();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          {canGoBack && (
            <TouchableOpacityBox onPress={navigation.goBack} flexDirection="row" marginBottom="s24">
              <Icon name="arrowLeft" color="buttonPrimary" />
              <Text preset="paragraphMedium" medium marginLeft="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
