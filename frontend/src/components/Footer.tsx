import React from "react";
import { Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";
import Subscription from "./Home/Subscription";
import CopyRight from "./shared/CopyRight";

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
                src="/assets/unibox-logo.png"
                className="footer-image"
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid>
              <Typography>
                Unibox helps you to find all universities info in a single place
                and help you to find your dream universities without spending
                too much time on search
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
        <CopyRight />
      </Container>
    </>
  );
};

export default Footer;
