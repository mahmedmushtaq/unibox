import {
  Unstable_Grid2 as Grid,
  List,
  TextField,
  Typography,
  styled,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import WhiteInputFiled from "../../shared/WhiteInputFiled";
import PrimaryButton from "../../shared/PrimaryButton";
import { featuresList } from "../../../global/constants";
import { CheckCircleOutline } from "@mui/icons-material";

const Subscription = () => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        bgcolor: "secondary.main",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        py: { xs: 5 },
        px: { xs: 5, md: 0 },
      }}
    >
      <Grid md={7} sx={{ px: { xs: 1, sm: 5, md: 10 } }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Subscribe Us
        </Typography>
        <Typography variant="h3" color="white" my={1}>
          For Latest Admissions Info
        </Typography>
        <WhiteInputFiled
          fullWidth
          placeholder="Enter your email for subscription"
          inputProps={{
            sx: {
              color: "white",
            },
          }}
          sx={{
            mt: 2,
          }}
        />
        <PrimaryButton text="Subscribe" fullWidth sx={{ mt: 2 }} />

        <List>
          {featuresList.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleOutline htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid md={5} sx={{ display: { xs: "none", sm: "block" } }}>
        <img
          alt="image"
          src="/assets/unibox-subscription.png"
          className="home-image5"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Subscription;
