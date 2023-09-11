import { useEffect } from 'react';
import { Dimensions } from 'react-native';

import { Box, BoxProps, Icon, Text } from '@components';
import { useToast, useToastService } from '@services';
import { $shadowProps } from '@theme';

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 2000);
    }
  }, [hideToast, toast]);

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
