import React from 'react';

import { SimpleLogo } from '@brand';
import { Box, Icon } from '@components';
import { useAppSafeArea } from '@hooks';

export function HomeHeader() {
  const { top } = useAppSafeArea();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      paddingBottom="s24"
      paddingHorizontal="s24"
      style={{ paddingTop: top }}
    >
      <SimpleLogo width={70}></SimpleLogo>
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bellOn" />
        </Box>

        <Icon name="chatOn" />
      </Box>
    </Box>
  );
}
