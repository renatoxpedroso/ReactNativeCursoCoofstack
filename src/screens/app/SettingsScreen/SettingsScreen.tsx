import { Screen, Text } from "@components";
import React from "react";
import { AppStackPramList } from "src/routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackPramList, 'SettingsScreen'>;

export function SettingsScreen({navigate}: ScreenProps){
    return(
        <Screen canGoBack>
            <Text>Settings Screen</Text>
        </Screen>
    )
}