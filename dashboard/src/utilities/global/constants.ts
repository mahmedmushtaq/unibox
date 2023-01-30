import {
  ViewComfy as ViewComfyIcon,
  Abc as AbcIcon,
  School as SchoolIcon,
  Settings as SettingsIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";

import { QueryClient } from "@tanstack/react-query";

export const drawerNavigation = [
  { id: 1, Icon: ViewComfyIcon, text: "Dashboard", link: "/" },
  { id: 2, Icon: AbcIcon, text: "Universities", link: "/university" },
  { id: 3, Icon: SchoolIcon, text: "Courses", link: "/course" },
  { id: 4, Icon: CategoryIcon, text: "Categories", link: "/category" },
  { id: 6, Icon: SettingsIcon, text: "Setting", link: "/setting" },
];

export const SAVE_PRIVATE_PATH_FOR_REDIRECT = "redirectPath";

// Create a client
export const queryClient = new QueryClient();

export enum queryClientKeyList {
  universities = "universities",
  categories = "categories",
  courses = "courses",
}
