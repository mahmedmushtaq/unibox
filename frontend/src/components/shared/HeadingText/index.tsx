import { SxProps, Typography, TypographyProps } from "@mui/material";
import { ElementType, ReactNode } from "react";

interface IProps extends TypographyProps {
  text: string | ReactNode;
  secondaryText?: string | ReactNode;
  text1?: string | ReactNode;
  secondarySx?: SxProps;
  component?: any;
}

const HeadingText = ({
  text,
  secondaryText,
  text1,
  variant = "h4",
  secondarySx = {},
  component,
  ...restProps
}: IProps) => {
  return (
    <Typography component={component as any} {...restProps} variant={variant}>
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
