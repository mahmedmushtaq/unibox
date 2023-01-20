import { Box, Container, SxProps } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const matches = useMediaQuery("(min-width:2000px)");
  return (
    <>
      <NavBar />
      <Box sx={{ maxWidth: matches ? "70%" : "xl" }} mx="auto">
        <Box sx={{ ...containerSx, ...sx }}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default FrontLayout;
