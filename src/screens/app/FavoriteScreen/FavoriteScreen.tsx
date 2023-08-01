import React from "react";

import { AppScreenProps } from "@routes";
import { Screen, Text } from "@components";

export function FavoriteScreen({}: AppScreenProps<'FavoriteScreen'>){
    return(
        <Screen>
            <Text>Favorite Screen</Text>
        </Screen>
    );
}