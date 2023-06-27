import React from "react";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";
import { useAppTheme } from "../../hooks/useAppThem";
import { ThemeColors } from "../../theme/theme";

export interface IconBase{
    size?: number;
    color?: string;
}

interface Props{
    name: IconName;
    color: ThemeColors;
    size?: number;
}

export function Icon({name, color='backgroundContrast', size}: Props){
    const SVGIcon = iconRegistry[name];
    const {colors} = useAppTheme();
    return(
        <SVGIcon color={colors[color]} size={size}/>
    );
}

const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon
}

type IconType = typeof iconRegistry;
type IconName = keyof IconType;