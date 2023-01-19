import { ReactNode } from "react";
import { Container, Box, SxProps } from "@mui/material";
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
  minHeight: "100vh",
  overflowX: "hidden",
};

const InfoLayout = ({ header, headerBg, children, sx = {} }: IProps) => {
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
      <Container maxWidth="xl">
        <Box sx={{ ...containerSx, ...sx }}>{children}</Box>
        <Footer />
      </Container>
    </>
  );
};

export default InfoLayout;
