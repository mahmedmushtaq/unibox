import {
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import TextWithIcon from "../shared/TextWithIcon";
import AccordionWrapper from "../shared/AccordionWrapper";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import { categoriesList } from "../../global/constants";

const CategoryList = () => {
  return (
    <>
      <Card sx={{ px: 1 }}>
        {categoriesList.map((category, index) => (
          <AccordionWrapper
            key={category.id}
            heading={
              <Box width="100%" mx="auto">
                <TextWithIcon
                  text={category.text}
                  icon={<category.icon />}
                  sx={{ pb: 2 }}
                />
                {index + 1 < categoriesList.length && (
                  <Divider sx={{ width: "100%" }} />
                )}
              </Box>
            }
          >
            <Box sx={{ px: 2 }}>children</Box>
          </AccordionWrapper>
        ))}
      </Card>
      <Card sx={{ mt: 3, px: 3, pt: 2, pb: 3 }}>
        <Typography variant="h6">Best Fit</Typography>
        <TextWithIcon
          icon={<StarBorderPurple500OutlinedIcon color="secondary" />}
          text=" Answer some questions to check your match with our programmes "
        />
      </Card>
    </>
  );
};

export default CategoryList;
