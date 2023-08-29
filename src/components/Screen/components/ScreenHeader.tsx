import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '../Screen';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

export function ScreenHeader({ canGoBack, title }: Props) {
  const navigation = useNavigation();
  return (
    <Box flexDirection="row" marginBottom="s24" alignItems="center" justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox onPress={navigation.goBack} flexDirection="row" alignItems="center">
          <Icon name="arrowLeft" color="buttonPrimary" />
          {!title && (
            <Text preset="paragraphMedium" medium marginLeft="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={20} />}
    </Box>
  );
}
