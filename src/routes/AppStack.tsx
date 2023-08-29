import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, PostCommentScreen, SettingsScreen } from '@screens';
import { AppTabNavigator } from './AppTabNavigator';

export type AppStackPramList = {
  AppTabNavigator: undefined;
  SettingsScreen: undefined;
  PostCommentScreen: { postId: number };
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
    </Stack.Navigator>
  );
}
