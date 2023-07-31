import { Button, Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { AppStackPramList } from "src/routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackPramList, 'HomeScreen'>;

export function HomeScreen({navigation}: ScreenProps){
    return(
        <Screen>
            <Text>Home Screen</Text>
            <Button title="Settings" onPress={() => navigation.navigate('SettingsScreen')}/>
        </Screen>
    )
}