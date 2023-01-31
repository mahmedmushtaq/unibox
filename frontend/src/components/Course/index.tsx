import CourseDetailBox from "./CourseDetailBox";
import InfoLayout from "../../Layouts/InfoLayout";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import UniversitySideBoxDetail from "./UniversiteDetailBox";
import HeadingText from "../shared/HeadingText";
import TextWithIcon from "../shared/TextWithIcon";
import { useQuery } from "@tanstack/react-query";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import CourseGeneralHeadingBox from "./CourseGeneralHeadingBox";
import { getCourseBySlug } from "../../api/course";

interface IProps {
  slug: string;
}

const Course = ({ slug }: IProps) => {
  const query = useQuery({
    queryKey: ["courseDetail"],
    queryFn: () => getCourseBySlug(slug),
  });
  const data = query.data;

  return (
    <InfoLayout
      header={
        <CourseDetailBox
          degreeType={data?.degreeType || "wait..."}
          location={data?.location || "wait..."}
          courseName={data?.name || "wait..."}
          universityName={data?.university?.name || "wait..."}
          universityCourseUrl={data?.websiteLink || "wait..."}
          fee={data?.fee || "wait..."}
          duration={data?.duration || "wait..."}
          startDate={data?.startDate || "wait..."}
        />
      }
    >
      <Box pt={10} sx={{ px: { xs: 5, md: 10 } }}>
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
            <Typography mt={2}>{data?.description}</Typography>
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
            <UniversitySideBoxDetail
              imgSrc={data?.university?.iconLink || "wait..."}
              name={data?.name || "wait..."}
              ranking={data?.university?.ranking || 0}
              rating={data?.university?.rating || 0}
              location={data?.university?.location || "wait..."}
            />
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
