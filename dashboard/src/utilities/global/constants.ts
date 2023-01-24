import {
  ViewComfy as ViewComfyIcon,
  Abc as AbcIcon,
  School as SchoolIcon,
  SupportAgent as SupportAgentIcon,
  Group as GroupIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

export const drawerNavigation = [
  { id: 1, Icon: ViewComfyIcon, text: "Dashboard", link: "/dashboard" },
  { id: 2, Icon: AbcIcon, text: "University", link: "/university" },
  { id: 3, Icon: SchoolIcon, text: "Admission", link: "/admission" },
  { id: 4, Icon: GroupIcon, text: "User", link: "/user" },
  { id: 5, Icon: SupportAgentIcon, text: "Support", link: "/support" },
  { id: 6, Icon: SettingsIcon, text: "Setting", link: "/setting" },
];

export const SAVE_PRIVATE_PATH_FOR_REDIRECT = "redirectPath";
