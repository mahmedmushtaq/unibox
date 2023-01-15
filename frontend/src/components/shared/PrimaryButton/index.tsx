import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface IProps extends ButtonProps {
  text: string | ReactNode;
}

const PrimaryButton = ({ text, sx, ...restProps }: IProps) => {
  return (
    <Button
      sx={{
        ...(sx || {}),
        borderRadius: 10,
        px: 3,
        fontWeight: "bold",
        py: 1.5,
        fontSize: { sm: "0.7rem", md: "0.875rem" },
      }}
      variant="contained"
      disableElevation
      color="primary"
      {...restProps}
    >
      {text || restProps.children}
    </Button>
  );
};

export default PrimaryButton;
