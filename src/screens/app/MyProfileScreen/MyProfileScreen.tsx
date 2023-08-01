import React from "react";

import { AppScreenProps } from "@routes";
import { Screen, Text } from "@components";

export function MyProfileScreen({}: AppScreenProps<'MyProfileScreen'>){
    return(
        <Screen>
            <Text>MyProfileScreen</Text>
        </Screen>
    );
}