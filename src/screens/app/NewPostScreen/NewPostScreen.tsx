import React from "react";

import { AppScreenProps } from "@routes";
import { Screen, Text } from "@components";

export function NewPostScreen({}: AppScreenProps<'NewPostScreen'>){
    return(
        <Screen>
            <Text>NewPostScreen</Text>
        </Screen>
    );
}