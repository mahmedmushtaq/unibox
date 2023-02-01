import { CSSProperties } from "react";
import {
  Unstable_Grid2 as Grid,
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SecondaryButton from "../../shared/SecondaryButton";
import HeadingText from "../../shared/HeadingText";
import { featuresList } from "../../../global/constants";
import Link from "next/link";

const Header = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: { xs: "center", md: "space-between" },
        width: "90%",
        mx: "auto",
      }}
      alignItems="center"
      mt={5}
    >
      <Grid lg={5} md={6}>
        <Box sx={headerContentContainerSx}>
          <HeadingText
            variant="h3"
            text="Find All"
            secondaryText="Universities Info"
            text1="In a second"
          />

          <Box my={2} sx={{ width: "100%" }}>
            <TextField
              placeholder="Search courses By Name, Location, and category"
              fullWidth
            />
            <SecondaryButton
              LinkComponent={Link}
              href="/course"
              fullWidth
              sx={{ mt: 2 }}
              text="Search Courses"
            />
          </Box>
          <List>
            {featuresList.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid md={6} sx={{ mt: { xs: 2, md: 0 }, textAlign: "center" }}>
        <img
          alt="image"
          src="/assets/hero%20image-1200w.png"
          style={headerImageStyle}
        />
      </Grid>
    </Grid>
  );
};

const headerContentContainerSx = {
  flex: 1,
  minWidth: "50%",
  pr: 1,
};

const headerImageStyle: CSSProperties = {
  width: "100%",
  maxWidth: 589,
  objectFit: "cover",
};

export default Header;
