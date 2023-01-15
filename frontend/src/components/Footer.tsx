import React from "react";
import { Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";
import Subscription from "./Home/Subscription";

const Footer = ({ hideSubscription }: { hideSubscription?: boolean }) => {
  return (
    <>
      {!hideSubscription && <Subscription />}
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          sx={{ py: 10, px: 5, flexDirection: { xs: "column", sm: "row" } }}
          alignItems="center"
        >
          <Grid container spacing={2} flexDirection="column" sm={5}>
            <Grid>
              <img
                alt="image"
                src="/playground_assets/logo-200h.png"
                className="footer-image"
              />
            </Grid>
            <Grid>
              <Typography>
                Feed all your content, news, mailboxes all into one single app
                and read everything from one place, on your device.
              </Typography>
            </Grid>
            <Grid mt={2}>
              <Typography mb={2} variant="h6">
                Follow Us
              </Typography>
              <Twitter fontSize="large" />
              <Facebook fontSize="large" />
            </Grid>
          </Grid>
          <Grid
            container
            sm={3}
            md={2}
            sx={{ my: { xs: 2, sm: 0 } }}
            flexDirection="column"
            spacing={2}
          >
            <Grid>
              <Typography variant="h6">Links</Typography>
            </Grid>
            <Grid>
              <Typography>Home</Typography>
            </Grid>
            <Grid>
              <Typography>About</Typography>
            </Grid>
            <Grid>
              <Typography>Contact</Typography>
            </Grid>
          </Grid>

          <Grid container sm={3} md={2} flexDirection="column" spacing={2}>
            <Grid>
              <Typography variant="h6">Privacy Policy</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography textAlign="center">
          {" "}
          © All rights reserved @unibox
        </Typography>
      </Container>
    </>
  );
};

export default Footer;
