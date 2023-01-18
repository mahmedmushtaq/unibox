import { Box, Container, SxProps } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const containerSx: SxProps = {
  width: "100%",
  position: "relative",
  bgcolor: "background.default",
  minHeight: "100vh",
  overflowX: "hidden",
};

const FrontLayout = ({
  children,
  sx = {},
}: {
  children: ReactNode;
  sx?: SxProps;
}) => {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <Box sx={{ ...containerSx, ...sx }}>{children}</Box>
        <Footer />
      </Container>
    </>
  );
};

export default FrontLayout;
