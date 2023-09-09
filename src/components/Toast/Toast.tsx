import { Box, BoxProps, Icon, Text } from '@components';
import { $shadowProps } from '@theme';
import { Dimensions } from 'react-native';

export function Toast() {
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{ flexShrink: 1 }} ml="s16" bold preset="paragraphMedium">
        Toast
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
