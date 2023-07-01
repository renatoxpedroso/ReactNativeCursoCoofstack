import React from 'react';
import {Box} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppThem';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <Box flexDirection="row" marginBottom="s24">
              <Icon name="arrowLeft" color="buttonPrimary" />
              <Text preset="paragraphMedium" medium marginLeft="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
