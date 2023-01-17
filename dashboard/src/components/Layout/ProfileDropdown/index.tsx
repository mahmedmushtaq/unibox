import { useState } from "react";
import { Button } from "@mui/material";
import CustomMenuList from "../../shared/CustomMenuList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";

const list = [
  { id: 1, text: "Settings", link: "/setting" },
  { id: 2, text: "Logout" },
];

const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <PersonIcon />
      </Button>
      <CustomMenuList
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        items={list}
      />
    </div>
  );
};

export default ProfileDropdown;
