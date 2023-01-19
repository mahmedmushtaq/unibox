import { Box, Typography, Unstable_Grid2 as Grid, Card } from "@mui/material";
import TextWithIcon from "../shared/TextWithIcon";

const UniversitySideBoxDetail = () => {
  return (
    <Card sx={{ p: 2 }}>
      <TextWithIcon
        icon={
          <img
            src="https://storage-prtl-co.imgix.net/mp/5de0e808d3b6.png?w=64&auto=format,compress&q=40"
            width={70}
            height={70}
          />
        }
        text={
          <Box ml={2}>
            <Typography variant="h5">University of York</Typography>
            <Typography>York , England , United Kingdom</Typography>
          </Box>
        }
      />
      <Grid container justifyContent="space-between" width="100%">
        <Grid>
          <Typography variant="h6">139</Typography>
          <Typography color="grey">world ranking</Typography>
        </Grid>
        <Grid>
          <Typography variant="h6">4.3 rating</Typography>
          <Typography color="grey">77 reviews</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UniversitySideBoxDetail;
