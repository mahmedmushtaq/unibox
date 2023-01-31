import { Box, Typography, Unstable_Grid2 as Grid, Card } from "@mui/material";
import TextWithIcon from "../shared/TextWithIcon";

interface IProps {
  imgSrc: string;
  name: string;
  location: string;
  ranking: number;
  rating: number;
}

const UniversitySideBoxDetail = ({ imgSrc, name, ranking, rating }: IProps) => {
  return (
    <Card sx={{ p: 2 }}>
      <TextWithIcon
        icon={<img src={imgSrc} width={70} height={70} />}
        text={
          <Box ml={2}>
            <Typography variant="h5">{name}</Typography>
            <Typography>York , England , United Kingdom</Typography>
          </Box>
        }
      />
      <Grid container justifyContent="space-between" width="100%">
        <Grid>
          <Typography variant="h6">{ranking}</Typography>
          <Typography color="grey">world ranking</Typography>
        </Grid>
        <Grid>
          <Typography variant="h6">{rating}</Typography>
          <Typography color="grey">77 reviews</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UniversitySideBoxDetail;
