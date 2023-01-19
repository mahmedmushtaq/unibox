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
import CourseGeneralHeadingBox from "./CourseGeneralHeadingBox";

interface IProps {
  degreeType: string;
  location: string;
  universityName: string;
  courseName: string;
  universityCourseUrl: string;
}

const CourseDetailBox = ({
  degreeType,
  location,
  universityName,
  courseName,
  universityCourseUrl,
}: IProps) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        maxWidth: 1536,
        height: "100%",
        py: 2,
        pt: 20,
      }}
    >
      <Grid container flexDirection="column">
        <Grid xs={12} sm={7} md={4.5}>
          <CourseGeneralHeadingBox
            degreeType={degreeType}
            location={location}
            universityName={universityName}
            courseName={courseName}
            universityCourseUrl={universityCourseUrl}
          />
        </Grid>
      </Grid>
      <Card sx={{ px: 2, mt: 4, py: 3 }}>
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          sx={{
            background: "white",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid xs={10} sm={6} md={3}>
            <TextWithIcon
              icon={<WatchLaterOutlinedIcon fontSize="large" />}
              text={
                <Box>
                  <Typography variant="h6">1 Year</Typography>
                  <Typography>Duration</Typography>
                </Box>
              }
            />
          </Grid>
          <Grid xs={10} sm={6} md={3}>
            <TextWithIcon
              icon={<AttachMoneyOutlinedIcon fontSize="large" />}
              text={
                <Box>
                  <Typography variant="h6">31,092 EUR/year</Typography>
                  <Typography>Tuition Fee</Typography>
                </Box>
              }
            />
          </Grid>
          <Grid xs={10} sm={6} md={3}>
            <TextWithIcon
              icon={<SendOutlinedIcon fontSize="large" />}
              text={
                <Box>
                  <Typography variant="h6">AnyTime</Typography>
                  <Typography>Apply Date</Typography>
                </Box>
              }
            />
          </Grid>
          <Grid xs={10} sm={6} md={3}>
            <TextWithIcon
              icon={<CalendarMonthOutlinedIcon fontSize="large" />}
              text={
                <Box>
                  <Typography variant="h6">Sep 23</Typography>
                  <Typography>Start Date</Typography>
                </Box>
              }
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default CourseDetailBox;
