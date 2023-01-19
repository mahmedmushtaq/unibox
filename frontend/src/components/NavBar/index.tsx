import React, { useState } from "react";
import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "./CustomDrawer";
import SecondaryButton from "../shared/SecondaryButton";
import Link from "next/link";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  return (
    <Box sx={{ flexGrow: 1, px: 2, mx: "auto", my: 2 }}>
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
          {contentData.navbarLinks.map((linkItem) => (
            <Typography
              component={Link}
              href={linkItem.link}
              key={linkItem.id}
              mx={2}
              color="primary"
              sx={{ cursor: "pointer", textDecoration: "none" }}
            >
              {linkItem.text}
            </Typography>
          ))}
        </Grid>
        <Grid xs={10} textAlign="end" sm={3}>
          <SecondaryButton
            sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}
            link="/course"
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
  );
};

const contentData = {
  logo: "/assets/unibox-navbar.svg",
  navbarLinks: [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
  ],
};

export default NavBar;
