import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import ImageCard from "../../shared/ImageCard";
import HeadingText from "../../shared/HeadingText";

const Features = () => {
  return (
    <Box mx="auto">
      <Box mt={5} sx={{ maxWidth: { xs: 300, sm: 600 } }} mx="auto">
        <HeadingText
          text="Read"
          secondaryText="everything in one place"
          text1=" and keep with latest admission news"
        />
      </Box>

      <Grid
        container
        sx={{
          width: "80%",
          mx: "auto",
          justifyContent: { xs: "center", md: "space-between" },
          mt: 5,
          "& > div": {
            mt: { xs: 5 },
          },
        }}
      >
        {featuresList.map((list) => (
          <Grid md={12 / featuresList.length} key={list.id}>
            <ImageCard
              heading={list.heading}
              imageSrc={list.imgSrc}
              description={list.summary}
            />
          </Grid>
        ))}
      </Grid>

      {featuresList.map(
        (list) =>
          list.largeSectionHeading && (
            <Grid
              key={list.id}
              container
              alignItems="center"
              mt={10}
              sx={{
                flexDirection: {
                  md: list.reverseRow ? "row-reverse" : "row",
                  xs: "column",
                },
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Grid md={6} xs={12}>
                <img
                  src={list.largeSectionImgSrc}
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
              <Grid
                md={6}
                xs={12}
                sx={{
                  mt: { xs: 3, md: 0 },
                  maxWidth: { xs: "80%", md: "40%", lg: "35%" },
                }}
              >
                <Typography variant="h4">{list.largeSectionHeading}</Typography>
                <Typography color="grey" mt={4}>
                  {list.largeSectionDescription}
                </Typography>
              </Grid>
            </Grid>
          )
      )}
    </Box>
  );
};

const featuresList = [
  {
    id: 1,
    heading: "Search  courses and find criteria info",
    largeSectionHeading: "Your favorite universities info at your fingertips.",
    largeSectionImgSrc: "/assets/section-image1-1200w.png",
    largeSectionDescription:
      "Our website puts your favorite universities information at your fingertips. With our user-friendly platform, you can easily access all the information you need to know about your dream universities. From program offerings, to tuition cost, campus life, admission requirements and more, we have it all. We understand that making decisions about your education can be overwhelming, and that's why we have made it our mission to provide you with all the information you need in one place. With our website, you can stay organized and on top of your college search and application process. Whetheryou're a high school student just starting your research or a transfer student looking for a new school, our website is your one-stop-shop for all things universities.",
    imgSrc: "/assets/stars-200h.png",
    summary:
      "One important step in your search is to determine your criteria for selecting a university. This can include factors such as location, size, academic programs, cost, and campus culture.",
  },
  {
    id: 2,
    heading: "Follow your dream universities Update",
    imgSrc: "/assets/hearth-200h.png",
    largeSectionHeading: "Free Open Admission Updates",
    largeSectionImgSrc: "/assets/section-image2-1200w.png",
    largeSectionDescription:
      "By using our website, You'll be the first to know when universities open their admission process and when the deadlines are approaching. This way, you'll be able to take advantage of the opportunity and submit your application in time. Our updates also provide you with important information about the application requirements, tuition, and scholarships. By signing up for our updates, you'll have all the information you need to make your dream of attending a specific university a reality. Don't miss out on the opportunity to apply to your dream school, sign up for our free open admission updates today!",
    reverseRow: true,
    summary:
      "Following your dream universities has never been easier! Our website is dedicated to helping students like you find the perfect institution to pursue their goals.",
  },
  {
    id: 3,
    imgSrc: "/assets/mail-200h.png",
    heading: "Keep update your knowledge about open admissions",
    summary:
      "Sign up for our free email subscription and stay up-to-date with the latest information and updates about open admissions in different universities ",
  },
];

export default Features;
