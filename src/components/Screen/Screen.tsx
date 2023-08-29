import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box, BoxProps } from '@components';
import { useAppTheme, useAppSafeArea } from '@hooks';

import { ScrollViewContainer, ViewContainer, ScreenHeader } from './components';

export interface ScreenProps extends BoxProps {
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
  title,
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
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
