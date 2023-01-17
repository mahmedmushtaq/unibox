import React, { useState } from "react";
import { CssBaseline, Unstable_Grid2 as Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { AppBar, Drawer, DrawerHeader } from "./wrapper";
import Logo from "../../components/shared/svgs/Logo";
import TextWithIcon from "../../components/shared/TextWithIcon";
import ProfileDropdown from "../../components/Layout/ProfileDropdown";
import SchoolIcon from "@mui/icons-material/School";
import AbcIcon from "@mui/icons-material/Abc";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { NavLink, useLocation } from "react-router-dom";
import { drawerNavigation } from "../../utilities/global/constants";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  heading?: string;
}

const DashboardLayout = ({ children, heading }: IProps) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getSelectedNavigationItemSx = (isSelected: boolean) => ({
    color: isSelected ? "common.white" : "common.black",
    bgcolor: isSelected ? "primary.main" : "common.white",
  });

  return (
    <Box sx={{ display: "flex", p: 0 }}>
      <CssBaseline />
      <AppBar
        sx={{
          background: "white",
          boxShadow: "0px 1px 10px rgba(74, 74, 74, 0.07)",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <Grid container alignItems="center" sx={{ width: "100%" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon htmlColor="black" />
            </IconButton>

            <Grid xs={8}>
              <Typography variant="h6" color="black" noWrap component="div">
                Unibox
              </Typography>
            </Grid>
            <Grid ml="auto">
              <ProfileDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          borderRight: 0,
          boxShadow: "0px 2px 10px rgba(132, 132, 132, 0.07)",
        }}
      >
        <DrawerHeader sx={{ position: "relative" }}>
          <Box sx={{ mr: "auto" }}>
            <Logo />
          </Box>

          <ChevronLeftIcon
            sx={{
              fontSize: 30,
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              bottom: "50%",
              transform: "translate(-50%, -50%)",
              right: 0,
            }}
            onClick={handleDrawerClose}
          />
        </DrawerHeader>

        <Box mx="auto">
          {drawerNavigation.map((item, index) => (
            <NavLink
              style={{ textDecoration: "none" }}
              key={item.id}
              to={item.link}
            >
              <TextWithIcon
                key={item.id}
                icon={<item.Icon fontSize="small" />}
                link={item.link}
                sx={{
                  height: !open ? undefined : 48,
                  width: !open ? undefined : 194,
                  pl: 3,
                  cursor: "pointer",
                  my: 3,
                  p: !open ? 2 : undefined,
                  borderRadius: !open ? undefined : 3,
                  ...getSelectedNavigationItemSx(
                    location.pathname === item.link
                  ),
                }}
                text={!open ? "" : item.text}
              />
            </NavLink>
          ))}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, py: 3, px: 5 }}>
        <DrawerHeader />
        <Box>
          {heading && (
            <Typography variant="h6" sx={{ mb: 2 }}>
              {heading}
            </Typography>
          )}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
