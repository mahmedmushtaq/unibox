import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";
import Link from "next/link";

interface IProps extends ButtonProps {
  text?: string | ReactNode;
  link?: string;
  target?: string;
}

const SecondaryButton = ({
  text = "Courses",
  sx,
  link,
  ...restProps
}: IProps) => {
  return (
    <Button
      sx={{
        borderRadius: 10,
        px: 3,
        fontWeight: "bold",
        py: 1.5,
        color: "white",
        fontSize: { sm: "0.7rem", md: "0.875rem" },
        ...(sx || {}),
      }}
      target={restProps.target || ""}
      variant="contained"
      disableElevation
      color="secondary"
      {...restProps}
    >
      {link ? (
        <Link style={{ textDecoration: "none", color: "white" }} href={link}>
          {restProps.children || text}
        </Link>
      ) : (
        restProps.children || text
      )}
    </Button>
  );
};

export default SecondaryButton;
