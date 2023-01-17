import { Box, Container, SxProps } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
