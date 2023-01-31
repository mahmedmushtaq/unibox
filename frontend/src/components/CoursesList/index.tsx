import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import CourseGeneralDetail from "./CourseGeneralDetail";
import CategoryList from "./CategoryList";
import { useQuery, useQueries } from "@tanstack/react-query";
import { getAllCourses } from "../../api/course";
import { getAllUniversities } from "../../api/university";
import { convertNameToSlug } from "../../global/helpers";

const CoursesList = () => {
  const results = useQueries({
    queries: [
      { queryKey: ["coursesList"], queryFn: getAllCourses },
      {
        queryKey: ["universitiesList"],
        queryFn: getAllUniversities,
      },
    ],
  });

  const totalUniversities = results?.[1].data?.items.length || 0;
  const courseList = results?.[0].data?.items;
  return (
    <Box>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={{ minHeight: 130, bgcolor: "white", width: "100%" }}
      >
        <Grid xs={0} md={4} lg={3.2} />
        <Grid xs={12} md={7} lg={6} sx={{ px: { xs: 3, md: 0 }, py: 3 }}>
          <Typography variant="h5">
            Masters degree from all around the world
          </Typography>
          <Typography color="grey" mt={1}>
            {totalUniversities} Registered Universitiess
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          justifyContent: { md: "space-around" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid
          xs={11.6}
          md={3}
          lg={2.5}
          sx={{
            position: "relative",
            px: 1,
            overflowX: "hidden",
            mx: { xs: "auto" },
          }}
        >
          <Box
            sx={{
              position: { xs: "relative", md: "fixed" },
              width: "inherit",
              zIndex: 100,
              top: { md: 100 },
              maxWidth: { xs: "100%", md: 320 },
              borderTop: "3px solid red",
              borderRadius: { md: 5 },
              maxHeight: { md: "85%" },
              overflowY: "auto",
              overflowX: "hidden",
              mx: "auto",
            }}
          >
            <CategoryList />
          </Box>
        </Grid>

        <Grid xs={12} md={8} lg={9} sx={{ px: 2 }}>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "none" },
              mt: 7,
              display: { xs: "block", md: "none" },
            }}
            variant="h5"
          >
            Universities List
          </Typography>
          {courseList?.map((course) => (
            <CourseGeneralDetail
              key={course.id}
              heading={course.name}
              price={course.fee}
              courseDuration={course.duration}
              summary={course.description}
              admissionOpenDate={course.startDate}
              universityName={course.university.name}
              universityLocation={course.university.location}
              link={`/course/${course.slug}`}
              universityImg={course.university.iconLink}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoursesList;
