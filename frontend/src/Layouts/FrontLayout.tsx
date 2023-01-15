import { Box, Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

const containerSx: SxProps = {
  width: "100%",
  position: "relative",

  overflowX: "hidden",
};

const FrontLayout = ({
  children,
  sx = { bgcolor: "background.default", minHeight: "100vh" },
}: {
  children: ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ ...containerSx, ...sx }}>{children}</Box>
    </Container>
  );
};

export default FrontLayout;
