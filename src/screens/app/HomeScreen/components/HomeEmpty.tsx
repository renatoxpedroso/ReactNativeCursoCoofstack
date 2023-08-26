import { ActivityIndicator, Box, Button, Text } from '@components';
import React from 'react';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}
export function HomeEmpty({ loading, error, refetch }: Props) {
  let component = <Text preset="paragraphMedium">Não foi possível carregar o feed</Text>;
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb={'s16'}>
          Não foi possível carregar o feed
        </Text>
        <Button title="recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} alignContent="center" alignItems="center">
      {component}
    </Box>
  );
}
