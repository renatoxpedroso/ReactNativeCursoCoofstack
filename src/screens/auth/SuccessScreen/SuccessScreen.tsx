import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";

export function SuccessScreen(){

    function goBackToLoginScreen(){

    }

    return(
        <Screen>
            <Icon name="arrowLeft"/>
            <Text preset="headingLarge" marginTop="s24">Titulo</Text>
            <Text preset="paragraphLarge" marginTop="s16">Paragrafo</Text>
            <Button onPress={goBackToLoginScreen} title="Volar ao início" marginTop="s40"/>
        </Screen>
    );
}