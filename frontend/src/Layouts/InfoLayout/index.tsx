import { ReactNode } from "react";
import { Container, Box, SxProps, useMediaQuery } from "@mui/material";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface IProps {
  header?: ReactNode;
  children: ReactNode;
  sx?: SxProps;
  headerBg?: string;
}

const containerSx: SxProps = {
  width: "100%",
  position: "relative",
  bgcolor: "background.default",
  minHeight: "20vh",
  overflowX: "hidden",
};

const InfoLayout = ({ header, headerBg, children, sx = {} }: IProps) => {
  const matches = useMediaQuery("(min-width:2000px)");
  return (
    <>
      <NavBar />
      {header && (
        <Box
          sx={{
            p: 0,
            m: 0,
            background: headerBg || `url(/assets/course_bg.avif)`,
            backgroundSize: "cover",
          }}
        >
          <Box width="100vw">{header}</Box>
        </Box>
      )}
      <Box sx={{ maxWidth: matches ? "70%" : "xl" }} mx="auto">
        <Box sx={{ ...containerSx, pb: 20, ...sx }}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default InfoLayout;
