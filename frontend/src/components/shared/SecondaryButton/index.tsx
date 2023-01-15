import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface IProps extends ButtonProps {
  text?: string | ReactNode;
}

const SecondaryButton = ({
  text = "Universities",
  sx,
  ...restProps
}: IProps) => {
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
      color="secondary"
      {...restProps}
    >
      {text || restProps.children}
    </Button>
  );
};

export default SecondaryButton;
