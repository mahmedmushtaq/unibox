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
}

const TextWithIcon = ({
  icon,
  text,
  sx,
  onClick,
  endIcon,
  textStyle,
  link,
}: IProps) => {
  return (
    <List sx={sx}>
      <ListItem disablePadding>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText sx={textStyle} primary={text} />
        {endIcon && <ListItemIcon>{endIcon}</ListItemIcon>}
      </ListItem>
    </List>
  );
};

export default TextWithIcon;
