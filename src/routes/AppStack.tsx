import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostCommentScreen, SettingsScreen, ProfileScreen } from '@screens';
import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackPramList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  ProfileScreen: { userId: number };
  PostCommentScreen: { postId: number; postAuthoredId: number };
};

const Stack = createNativeStackNavigator<AppStackPramList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName="AppTabNavigator"
    >
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
