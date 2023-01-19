import { Box, Typography } from "@mui/material";
import InfoLayout from "../../Layouts/InfoLayout";
import Header from "./header";
import HeadingText from "../shared/HeadingText";

const About = () => {
  return (
    <InfoLayout headerBg="url(assets/about.png)" header={<Header />}>
      <Box textAlign="center" sx={{ maxWidth: "60%", mx: "auto", mt: 5 }}>
        <HeadingText
          text=""
          variant="body1"
          secondaryText="Unibox"
          sx={{ my: 15 }}
          text1="  began as a spin-off from a couple of large international study
          associations. It was born out of frustration, a total lack of
          information and overview of the fast-growing number of international
          Master’s programmes in Europe. In 2007, Mastersportal.com was
          developed and proved to be a roaring success. Soon after,
          Bachelorsportal.com, PhDportal.com, Shortcoursesportal.com, and
          Distancelearningportal.com followed. In 2021, we helped 52 million
          students around the world to explore study programmes and make an
          informed choice, throughout over 200,000 courses at 3,750+ educational
          institutes across 110 countries."
        />

        <HeadingText
          sx={{ mt: 5 }}
          text="Who"
          secondaryText="are we? And Why"
          text1="we do what we do"
        />
        <Typography mt={2}>
          From its very conception, unibox was founded to solve (our own)
          student problems. It was, and still is, fuelled by a strong belief in
          the value of international experiences - both for the individual
          student and for the society
        </Typography>
      </Box>
    </InfoLayout>
  );
};

export default About;
