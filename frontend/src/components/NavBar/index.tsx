import React, { useState } from "react";

import { Box, Button, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import SecondaryButton from "../Shared/SecondaryButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "./CustomDrawer";
import HomeLayout from "../../Layouts/HomeLayout";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  return (
    <HomeLayout sx={{}}>
      <Box sx={{ flexGrow: 1, mx: "auto", my: 2 }}>
        <Grid container alignItems={"center"} justifyContent={"space-between"}>
          <Grid xs={2} sm={3}>
            <img alt={"logo"} src={contentData.logo} />
          </Grid>
          <Grid
            sm={6}
            container
            justifyContent="center"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {contentData.navbarLinks.map((link) => (
              <Typography key={link.id} mx={2} sx={{ cursor: "pointer" }}>
                {link.text}
              </Typography>
            ))}
          </Grid>
          <Grid xs={10} textAlign="end" sm={3}>
            <SecondaryButton
              sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}
            />
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <MenuIcon onClick={toggleDrawer} />
            </Box>
          </Grid>
        </Grid>

        <CustomDrawer
          navbarLinks={contentData.navbarLinks}
          open={openDrawer}
          toggleDrawer={toggleDrawer}
        />
      </Box>
    </HomeLayout>
  );
};

const contentData = {
  logo: "/playground_assets/logo-1500h.png",
  navbarLinks: [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
  ],
};

export default NavBar;
