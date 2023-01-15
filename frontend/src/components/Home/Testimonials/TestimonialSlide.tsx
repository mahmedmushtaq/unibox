import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { ICarousalRef } from "../../../global/types";

interface IProps extends ICarousalRef {
  author: string;
  role?: string;
  testimonial: string;
  imgSrc: string;
  bgColor?: string;
}

const TestimonialSlide = ({
  author,
  imgSrc,
  testimonial,
  role,
  bgColor = "colors.darkblue",
  handleBack,
  handleNext,
}: IProps) => {
  return (
    <Box>
      <Grid
        container
        sx={{ ...rootContainerSx, bgcolor: bgColor }}
        alignItems="center"
      >
        <Grid
          container
          alignItems="stretch"
          justifyContent="space-between"
          sm={4}
          md={6}
        >
          <Box sx={artsContainerSx}>
            <Box sx={imageContainerSx}>
              <img
                alt="Dots"
                src="/assets/union-200h.png"
                style={dotsImageStyle}
              />
            </Box>
            <Box style={boxesContainerStyle}>
              <Box sx={dynamicBoxDesign("secondary.main")} />
              <Box sx={dynamicBoxDesign("orange", 104)} />
            </Box>
          </Box>
          <Box ml={2}>
            <Box
              sx={{
                background: `url(${imgSrc})`,
                ...personImageContainerSx,
              }}
            />
            <Grid
              container
              alignItems="stretch"
              justifyContent="flex-end"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Box sx={arrowIconContainerSx} onClick={handleBack}>
                <ArrowBackIcon fontSize="large" htmlColor="white" />
              </Box>

              <Box sx={arrowIconContainerSx} onClick={handleNext}>
                <ArrowForwardIcon fontSize="large" htmlColor="white" />
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid
          xs={8}
          sx={{
            p: { xs: 5, md: 1 },
            overflowWrap: "break-word",
            width: "100%",
          }}
          sm={6}
          md={5}
        >
          <Typography
            color="white"
            sx={{ whiteSpace: "normal", width: "100%" }}
          >
            {testimonial}
          </Typography>
          <Box mt={2}>
            <Typography color="white" sx={{ fontSize: 12 }}>
              {author}
            </Typography>
            <Typography color="white" sx={{ fontSize: 12 }}>
              {role}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const rootContainerSx = {
  minHeight: 500,
  "& > div": { mx: 2 },
  flexDirection: { xs: "column", sm: "row" },
};

const artsContainerSx = {
  flex: 1,
  display: { xs: "none", sm: "flex" },
  alignItems: { xs: "center", md: "flex-end" },
  flexDirection: "column",
  justifyContent: "space-between",
};

const imageContainerSx = {
  width: { md: 106, xs: 60 },
  height: { md: 106, xs: 60 },
};

const dotsImageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  marginTop: 21,
  objectFit: "cover",
  marginRight: 21,
};

const boxesContainerStyle: CSSProperties = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: " flex-end",
  flexDirection: "column",
};

const dynamicBoxDesign = (bgColor: string, boxSize = 54) => ({
  flex: " 0 0 auto",
  width: boxSize,
  height: boxSize,
  display: { xs: "none", md: "flex" },
  alignItems: "flex-start",
  flexDirection: "column",
  backgroundColor: bgColor,
});

const personImageContainerSx = {
  width: { xs: 150, md: 250 },
  height: { xs: 200, md: 300 },
  backgroundSize: "cover",
};

const arrowIconContainerSx = {
  flex: "0 0 auto",
  width: "100%",
  height: 108,
  display: "flex",
  maxWidth: 108,
  maxHeight: 108,
  transition: "0.3s",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(229, 229, 229, 0.2)",
  },
};

export default TestimonialSlide;
