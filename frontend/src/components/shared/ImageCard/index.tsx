import React, { CSSProperties } from "react";

import { Unstable_Grid2 as Grid, SxProps, Typography } from "@mui/material";

interface IProps {
  imageAlt?: string;
  imageSrc: string;
  description?: string;
  heading?: string;
  link?: string;
}

const ImageCard = ({
  imageAlt,
  imageSrc,
  description,
  heading,
  link,
}: IProps) => {
  return (
    <>
      <Grid
        container
        textAlign="center"
        sx={{ "& > div": { mx: 1 }, maxWidth: 285, mx: "auto" }}
        direction="column"
      >
        <Grid>
          <img alt={imageAlt} src={imageSrc} style={featureCardImageStyle} />
          <Typography variant="h6">{heading}</Typography>
        </Grid>
        <Grid>
          <Typography
            variant="body1"
            color="grey"
            my={1}
            sx={{ fontWeight: 300, textAlign: "start" }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid>
          <span>{link}</span>
        </Grid>
      </Grid>
    </>
  );
};

const featureCardImageStyle: CSSProperties = {
  width: 60,
  height: 60,
  objectFit: "cover",
};

export default ImageCard;
