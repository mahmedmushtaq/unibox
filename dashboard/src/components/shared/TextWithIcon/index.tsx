import { Box, Grid, SxProps, Typography } from "@mui/material";
import { ReactNode, CSSProperties, useState } from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  icon?: string | ReactNode;
  text: string | ReactNode;
  sx?: SxProps;
  endIcon?: string | ReactNode;
  onClick?: () => void;
  textStyle?: CSSProperties;
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
    <Grid sx={sx} container alignItems="center" onClick={onClick}>
      {icon && <Grid item>{icon}</Grid>}
      <Grid item sx={{ mx: 1 }}>
        <Typography style={textStyle}>{text}</Typography>
      </Grid>
      {endIcon && <Grid item> {endIcon}</Grid>}
    </Grid>
  );
};

export default TextWithIcon;
