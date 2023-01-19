import {
  Box,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ minHeight: 300, display: "flex", alignItems: "center" }}>
      <Container maxWidth="xl">
        <Typography color="white" variant="h4">
          Unibox is the global study choice platform. <br /> Empowering the
          world to choose education.
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
