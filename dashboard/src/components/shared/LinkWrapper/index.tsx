import { SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
  link: string;
  text: string;
  sx?: SxProps;
}

const LinkWrapper = ({ link, text, sx = {} }: IProps) => {
  return (
    <Typography
      component={Link}
      to={link}
      variant="body2"
      sx={{ color: "grey", ...sx }}
    >
      {text}
    </Typography>
  );
};

export default LinkWrapper;
