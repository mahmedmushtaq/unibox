import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Card,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SecondaryButton from "../shared/SecondaryButton";
import TextWithIcon from "../shared/TextWithIcon";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Link from "next/link";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

interface IProps {
  degreeType: string;
  location: string;
  universityName: string;
  courseName: string;
  universityCourseUrl: string;
  btnText?: string;
}

const CourseGeneralHeadingBox = ({
  degreeType,
  location,
  universityName,
  courseName,
  universityCourseUrl,
  btnText = "Visit Official Site",
}: IProps) => {
  return (
    <Card sx={{ px: 2, py: 2 }}>
      <Grid container alignItems="center">
        <Grid
          sx={{
            border: "1px solid black",
            borderRadius: 15,
            px: 2,
            py: 1,
            mx: 1,
          }}
        >
          <Typography variant="body2">{degreeType}</Typography>
        </Grid>
        <Grid
          sx={{
            border: "1px solid black",
            borderRadius: 15,
            px: 2,
            py: 1,
            mx: 1,
          }}
        >
          <Typography>{location}</Typography>
        </Grid>
        <Grid ml="auto">
          <FavoriteBorderIcon color="secondary" />
        </Grid>
      </Grid>
      <Typography sx={{ mt: 3 }}>{universityName}</Typography>
      <TextWithIcon
        icon={<SchoolOutlinedIcon fontSize="large" />}
        text={
          <Typography variant="h6" fontWeight="bold">
            {courseName}
          </Typography>
        }
      />
      <SecondaryButton
        fullWidth
        LinkComponent={Link}
        href={universityCourseUrl}
        target="_blank"
        sx={{ borderRadius: 0 }}
        text={btnText}
        endIcon={<OpenInNewOutlinedIcon />}
      />
    </Card>
  );
};

export default CourseGeneralHeadingBox;
