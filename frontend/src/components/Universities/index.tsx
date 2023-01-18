import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import CourseGeneralDetail from "./CourseGeneralDetail";
import CategoryList from "./CategoryList";

const Universities = () => {
  return (
    <Box>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={{ minHeight: 130, bgcolor: "white", width: "100%" }}
      >
        <Grid xs={0} md={4} lg={3.2} />
        <Grid xs={12} md={7} lg={6} sx={{ py: 3 }}>
          <Typography variant="h5">
            Masters degree from all around the world
          </Typography>
          <Typography color="grey" mt={1}>
            83435 Registered Universitiess
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
          <CourseGeneralDetail
            heading="Educational Leadership"
            price="10,800 EUR / year"
            courseDuration="1.5 years"
            summary=" The Educational Leadership programme offered by the Tampere
              University of Applied Sciences is a unique collaborative
              distance-learning programme. It is organised mainly online with
              three mandatory but interactive and fun intensive weeks in
              Finland."
            admissionOpenDate="12 April"
            universityName="Tampere University of Applied Sciences"
            universityLocation="Tampere, Finland"
            admissionCloseDate="24 december"
            universityImg="https://storage-prtl-co.imgix.net/mp/5de0e7d28f1a.png?fit=fill&fill=solid&fill-color=00FFFFFF&w=48&h=48&auto=format,compress"
          />
          <CourseGeneralDetail
            heading="Educational Leadership"
            price="10,800 EUR / year"
            courseDuration="1.5 years"
            summary=" The Educational Leadership programme offered by the Tampere
              University of Applied Sciences is a unique collaborative
              distance-learning programme. It is organised mainly online with
              three mandatory but interactive and fun intensive weeks in
              Finland."
            admissionOpenDate="12 April"
            universityName="Tampere University of Applied Sciences"
            universityLocation="Tampere, Finland"
            admissionCloseDate="24 december"
            universityImg="https://storage-prtl-co.imgix.net/mp/5de0e7d28f1a.png?fit=fill&fill=solid&fill-color=00FFFFFF&w=48&h=48&auto=format,compress"
          />
          <CourseGeneralDetail
            heading="Educational Leadership"
            price="10,800 EUR / year"
            courseDuration="1.5 years"
            summary=" The Educational Leadership programme offered by the Tampere
              University of Applied Sciences is a unique collaborative
              distance-learning programme. It is organised mainly online with
              three mandatory but interactive and fun intensive weeks in
              Finland."
            admissionOpenDate="12 April"
            universityName="Tampere University of Applied Sciences"
            universityLocation="Tampere, Finland"
            admissionCloseDate="24 december"
            universityImg="https://storage-prtl-co.imgix.net/mp/5de0e7d28f1a.png?fit=fill&fill=solid&fill-color=00FFFFFF&w=48&h=48&auto=format,compress"
          />
          <CourseGeneralDetail
            heading="Educational Leadership"
            price="10,800 EUR / year"
            courseDuration="1.5 years"
            summary=" The Educational Leadership programme offered by the Tampere
              University of Applied Sciences is a unique collaborative
              distance-learning programme. It is organised mainly online with
              three mandatory but interactive and fun intensive weeks in
              Finland."
            admissionOpenDate="12 April"
            universityName="Tampere University of Applied Sciences"
            universityLocation="Tampere, Finland"
            admissionCloseDate="24 december"
            universityImg="https://storage-prtl-co.imgix.net/mp/5de0e7d28f1a.png?fit=fill&fill=solid&fill-color=00FFFFFF&w=48&h=48&auto=format,compress"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Universities;
