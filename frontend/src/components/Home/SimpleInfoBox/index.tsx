import { Unstable_Grid2 as Grid, Box } from "@mui/material";
import HeadingText from "../../shared/HeadingText";
import ImageCard from "../../shared/ImageCard";

const SimpleInfoBox = () => {
  return (
    <Box sx={{ p: { sm: 10, xs: 4 } }}>
      <Box mx="auto" sx={{ maxWidth: { md: "60%", xs: "99%" } }}>
        <HeadingText
          text="If you love simplicity to look"
          secondaryText="new admission info"
          text1="then you would love unibox"
        />
      </Box>

      <Grid
        container
        sx={{
          p: { md: 5, xs: 2 },
          width: "100%",
          mt: 5,
          textAlign: "center",
          "& > div": { my: { xs: 2, md: 0 } },
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <Grid xs={11} sm={6} md={4}>
          <ImageCard
            heading="Open Admissions Update"
            imageSrc="/playground_assets/vector%203-200h.png"
          />
        </Grid>
        <Grid xs={11} sm={6} md={4}>
          <ImageCard
            imageSrc="/playground_assets/vector%203%20%5B1%5D-200h.png"
            heading="All criteria information in a single place"
          />
        </Grid>

        <Grid xs={11} sm={6} md={4}>
          <ImageCard
            imageSrc="/playground_assets/vector%203%20%5B2%5D-200h.png"
            heading="Free Email Subscription"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SimpleInfoBox;
