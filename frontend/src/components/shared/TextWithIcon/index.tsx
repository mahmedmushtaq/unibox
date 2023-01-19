import { ReactNode, CSSProperties, useState } from "react";
import {
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
} from "@mui/material";

interface IProps {
  icon?: string | ReactNode;
  text: string | ReactNode;
  sx?: SxProps;
  endIcon?: string | ReactNode;
  onClick?: () => void;
  textStyle?: SxProps;
  link?: string;
  iconSx?: SxProps;
}

const TextWithIcon = ({
  icon,
  text,
  sx,
  onClick,
  iconSx,
  endIcon,
  textStyle,
  link,
}: IProps) => {
  return (
    <List sx={sx}>
      <ListItem disablePadding>
        {icon && <ListItemIcon sx={iconSx}>{icon}</ListItemIcon>}
        <ListItemText sx={textStyle} primary={text} />
        {endIcon && <ListItemIcon sx={iconSx}>{endIcon}</ListItemIcon>}
      </ListItem>
    </List>
  );
};

export default TextWithIcon;
