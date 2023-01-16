import { Typography, TypographyProps } from "@mui/material";

interface IProps extends TypographyProps {}

const CopyRight = (props: IProps) => {
  return (
    <Typography {...props} textAlign="center">
      © All rights reserved @unibox
    </Typography>
  );
};

export default CopyRight;
