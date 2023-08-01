import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AuthStack';
import {AppStackPramList} from './AppStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList,  AppStackPramList{}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackPramList> =
  NativeStackScreenProps<AppStackPramList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;
