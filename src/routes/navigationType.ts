import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AuthStack';
import {AppStackPramList} from './AppStack';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {AppTabBottomTabParamList} from './AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackPramList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackPramList> =
  NativeStackScreenProps<AppStackPramList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackPramList, 'AppTabNavigator'>
>;
