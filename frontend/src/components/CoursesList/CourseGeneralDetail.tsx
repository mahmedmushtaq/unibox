import { Box, Card, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadingText from "../shared/HeadingText";
import TextWithIcon from "../shared/TextWithIcon";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface IProps {
  heading: string;
  summary: string;
  price: string;
  courseDuration: string;
  universityImg: string;
  universityName: string;
  universityLocation: string;
  admissionOpenDate: string;
  admissionCloseDate: string;
  link: string;
}

const CourseGeneralDetail = ({
  heading,
  summary,
  price,
  courseDuration,
  universityImg,
  universityLocation,
  universityName,
  admissionCloseDate,
  admissionOpenDate,
  link,
}: IProps) => {
  return (
    <Card
      sx={{
        width: { xs: "99%", md: "95%" },
        bgcolor: "white",
        mx: "auto",
        my: 2,
        py: 2,
      }}
    >
      <Box>
        <TextWithIcon
          sx={{ mx: { md: "auto" }, textAlign: { md: "center" } }}
          endIcon={<FavoriteBorderIcon htmlColor="red" />}
          textStyle={{ pl: 3, textAlign: "start" }}
          text={heading}
          link={link}
        />
      </Box>

      <Grid
        container
        justifyContent="space-between"
        columnGap={1}
        sx={{ px: 3, flexDirection: { xs: "column", sm: "row" } }}
      >
        <Grid xs={12} sm={8}>
          <Typography
            mt={2}
            variant="body2"
            color="grey"
            sx={{ fontWeight: 400 }}
          >
            {summary}
          </Typography>
          <Box maxWidth={70}>
            <TextWithIcon
              text="Open"
              link={link}
              linkColor="secondary"
              endIcon={<OpenInNewIcon color="secondary" />}
              iconSx={{ minWidth: 0 }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
            {price} <br /> course duration: {courseDuration}
          </Typography>
        </Grid>
      </Grid>

      <Typography fontWeight="bold" mt={3} mb={1} sx={{ px: 3 }}>
        Admission Date
      </Typography>
      <Grid
        container
        sx={{ flexDirection: { xs: "column", sm: "row" }, px: 3 }}
      >
        <HeadingText
          variant="body1"
          text="Open"
          secondaryText={admissionOpenDate}
        />
        <HeadingText
          sx={{ ml: { md: 2 } }}
          variant="body1"
          text="Close"
          secondaryText={admissionCloseDate}
        />
      </Grid>

      <TextWithIcon
        sx={{ mt: 2, px: 3 }}
        icon={<img src={universityImg} style={{ width: 50, height: 50 }} />}
        text={
          <>
            {universityName}
            <br />
            {universityLocation}
          </>
        }
      />
    </Card>
  );
};

export default CourseGeneralDetail;
