import React from "react";
import { Box } from "../Box/Box";
import { useAppTheme } from "../../hooks/useAppThem";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";

interface ScreenProps {
    children: React.ReactNode;
  }

export function Screen({children}: ScreenProps){
    const {top} = useAppSafeArea();
    return(
        <Box paddingHorizontal='s24' style={{padding: top}}>{children}</Box>
    );
}