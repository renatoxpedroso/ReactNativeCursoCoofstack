import React from 'react';
import {
  TextStyle,
} from 'react-native';

import {createText} from '@shopify/restyle';
import {Theme} from '@theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;
interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  medium?: boolean;
}

export function Text({
  children,
  style,
  bold,
  italic,
  medium,
  preset = 'paragraphMedium',
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, medium);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  medium?: boolean,
) {
  if (
    preset == 'headingLarge' ||
    preset == 'headingMedium' ||
    preset == 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case medium && italic:
      return $fontFamily.mediumItalic;
    case medium:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'caption'
  | 'captionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 34.8},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  caption: {fontSize: 12, lineHeight: 16.8},
  captionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
