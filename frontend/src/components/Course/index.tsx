import CourseDetailBox from "./CourseDetailBox";
import InfoLayout from "../../Layouts/InfoLayout";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import UniversitySideBoxDetail from "./UniversiteDetailBox";
import HeadingText from "../shared/HeadingText";
import TextWithIcon from "../shared/TextWithIcon";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import CourseGeneralHeadingBox from "./CourseGeneralHeadingBox";

const Course = () => {
  return (
    <InfoLayout
      header={
        <CourseDetailBox
          degreeType="MSC"
          location="On Campus"
          courseName="Advance Computer Science"
          universityName="University Of New York"
          universityCourseUrl="/sldjf"
        />
      }
    >
      <Box px={3} py={5}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid xs={12} sm={5} md={7}>
            <Typography variant="h4" fontWeight="bold">
              About
            </Typography>
            <Typography mt={2}>
              The Advanced Computer Science course from University of York will
              enable you to develop a high level of understanding and technical
              skill at the leading edge of the subject.
            </Typography>
            <HeadingText
              text="Visit the "
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
              secondaryText={
                <TextWithIcon
                  iconSx={{ minWidth: 0, ml: 1 }}
                  text="official programme website"
                  endIcon={<OpenInNewOutlinedIcon />}
                />
              }
              text1=" for more information"
              variant="body2"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <UniversitySideBoxDetail />
          </Grid>
        </Grid>

        <Typography variant="h4" textAlign="center" mt={10}>
          Other Offered Courses
        </Typography>

        <Grid
          container
          mt={5}
          columnSpacing={1}
          rowSpacing={1}
          justifyContent="center"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid xs={12} sm={6} md={3}>
            <CourseGeneralHeadingBox
              degreeType="MSC"
              location="On Campus"
              courseName="Advance Computer Science"
              universityName="University Of New York"
              universityCourseUrl="/sldjf"
              btnText="Visit"
            />
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <CourseGeneralHeadingBox
              degreeType="MSC"
              location="On Campus"
              courseName="Advance Computer Science"
              universityName="University Of New York"
              universityCourseUrl="/sldjf"
              btnText="Visit"
            />
          </Grid>
        </Grid>
      </Box>
    </InfoLayout>
  );
};

export default Course;
