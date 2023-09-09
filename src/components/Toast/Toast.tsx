import { useEffect } from 'react';
import { Dimensions } from 'react-native';

import { Box, BoxProps, Icon, Text } from '@components';
import { useToast } from '@services';
import { $shadowProps } from '@theme';

export function Toast() {
  const { toast, hiddenToast } = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hiddenToast();
      }, 2000);
    }
  }, [hiddenToast, toast]);

  if (!toast) {
    return null;
  }
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{ flexShrink: 1 }} ml="s16" bold preset="paragraphMedium">
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  backgroundColor: 'background',
  flexDirection: 'row',
  opacity: 0.89,
  maxWidth: Dimensions.get('screen').width * 0.9,
  style: { ...$shadowProps },
};
