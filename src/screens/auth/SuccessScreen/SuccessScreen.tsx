import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route}: ScreenProps){

    function goBackToLoginScreen(){

    }

    return(
        <Screen>
            <Icon name={route.params.icon.name} color={route.params.icon.color}/>
            <Text preset="headingLarge" marginTop="s24">{route.params.title}</Text>
            <Text preset="paragraphLarge" marginTop="s16">{route.params.description}</Text>
            <Button onPress={goBackToLoginScreen} title="Volar ao início" marginTop="s40"/>
        </Screen>
    );
}