import { Dimensions } from 'react-native';

import { Box, BoxProps, Icon, IconProps, Text } from '@components';
import { Toast, ToastPosition, ToastType } from '@services';
import { $shadowProps } from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({ toast }: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast.type || 'success';
  return (
    <Box {...$boxStyle} style={[{ [position]: 100 }, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{ flexShrink: 1 }} ml="s16" bold preset="paragraphMedium">
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  backgroundColor: 'background',
  flexDirection: 'row',
  opacity: 0.89,
  maxWidth: MAX_WIDTH,
};
