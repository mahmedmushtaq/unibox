/* eslint-disable react/display-name */
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface IProps {
  children: React.ReactNode[];
}

const Carousal = forwardRef(({ children }: IProps, ref) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % children.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      Math.abs((prevActiveStep - 1) % children.length)
    );
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  useImperativeHandle(ref, () => ({ handleNext, handleBack }), []);

  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        style={{
          height: "100%",
          width: "100%",
        }}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {children}
      </AutoPlaySwipeableViews>
    </Box>
  );
});

export default Carousal;
