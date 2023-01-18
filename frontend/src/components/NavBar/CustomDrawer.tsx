import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import SecondaryButton from "../shared/SecondaryButton";
import { Unstable_Grid2 as Grid } from "@mui/material";

interface IProps {
  open: boolean;
  toggleDrawer: () => void;
  navbarLinks: { id: number; text: string; link: string }[];
}
const logo = "/assets/logo-1500h.png";

const CustomDrawer = ({ open, toggleDrawer, navbarLinks }: IProps) => {
  const drawerContent = (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "background.default",
        height: "100%",
      }}
      py={4}
      onClick={toggleDrawer}
    >
      <Grid container alignItems="center" justifyContent="space-between" mx={2}>
        <Grid>
          <img alt={"logo"} src={logo} />
        </Grid>
        <Grid>
          <CloseIcon onClick={toggleDrawer} />
        </Grid>
      </Grid>
      <List>
        {navbarLinks.map((linkItem) => (
          <ListItem
            component={Link}
            href={linkItem.link}
            key={linkItem.id}
            disablePadding
            sx={{ px: 3 }}
          >
            <ListItemText
              sx={{ color: "primary.main", py: 1 }}
              primary={linkItem.text}
            />
          </ListItem>
        ))}
      </List>

      <Box mx={2}>
        <SecondaryButton />
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
          {drawerContent}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default CustomDrawer;
