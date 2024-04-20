import React from 'react';
import { Pressable } from 'react-native';

import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { useAppTheme } from '../../hooks/useAppThem';
import { ThemeColors } from '../../theme/theme';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../assets/icons/ArrowRightIcon';
import { BellIcon } from '../../assets/icons/BellIcon';
import { BellOnIcon } from '../../assets/icons/BellOnIcon';
import { BookmarkIcon } from '../../assets/icons/BookmarkIcon';
import { BookmarkFillIcon } from '../../assets/icons/BookmarkFillIcon';
import { CameraIcon } from '../../assets/icons/CameraIcon';
import { ChatIcon } from '../../assets/icons/ChatIcon';
import { ChatOnIcon } from '../../assets/icons/ChatOnIcon';
import { CheckIcon } from '../../assets/icons/CheckIcon';
import { ChevronRightIcon } from '../../assets/icons/ChevronRightIcon';
import { CommentIcon } from '../../assets/icons/CommentIcon';
import { FlashOffIcon } from '../../assets/icons/FlashOffIcon';
import { FlashOnIcon } from '../../assets/icons/FlashOnIcon';
import { HeartIcon } from '../../assets/icons/HeartIcon';
import { HeartFillIcon } from '../../assets/icons/HeartFillIcon';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { HomeFillIcon } from '../../assets/icons/HomeFillIcon';
import { MessageIcon } from '../../assets/icons/MessageIcon';
import { NewPostIcon } from '../../assets/icons/NewPostIcon';
import { ProfileIcon } from '../../assets/icons/ProfileIcon';
import { ProfileFillIcon } from '../../assets/icons/ProfileFillIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { SettingsIcon } from '../../assets/icons/SettingsIcon';
import { TrashIcon } from '../../assets/icons/TrashIcon';
import { CheckRoundIcon } from '../../assets/icons/CheckRoundIcon';
import { LoaderIcon } from '../../assets/icons/LoaderIcon';
import { MessageRoundIcon } from '../../assets/icons/MessageRoundIcon';
import { MessageRoundLightIcon } from '../../assets/icons/MessageRoundLightIcon';
import { ErrorRoundIcon } from '../../assets/icons/ErrorRoundIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({ name, color = 'backgroundContrast', size, onPress }: IconProps) {
  const SVGIcon = iconRegistry[name];
  const { colors } = useAppTheme();
  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  checkRound: CheckRoundIcon,
  errorRound: ErrorRoundIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  loader: LoaderIcon,
  message: MessageIcon,
  messageRound: MessageRoundIcon,
  messageRoundLight: MessageRoundLightIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
