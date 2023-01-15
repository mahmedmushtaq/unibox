import { SxProps, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface IProps extends TypographyProps {
  text: string | ReactNode;
  secondaryText?: string;
  text1?: string | ReactNode;
  secondarySx?: SxProps;
}

const HeadingText = ({
  text,
  secondaryText,
  text1,
  variant = "h4",
  secondarySx = {},
  ...restProps
}: IProps) => {
  return (
    <Typography {...restProps} variant={variant}>
      {text}
      <Typography
        sx={{ mx: 1, ...secondarySx }}
        color="secondary"
        component="span"
        variant={variant}
      >
        {secondaryText}
      </Typography>
      {text1}
    </Typography>
  );
};

export default HeadingText;
