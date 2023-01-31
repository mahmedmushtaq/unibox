import React, { ReactNode, useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CopyRight from "../../components/shared/CopyRight";

interface IProps {
  children: ReactNode | ReactNode[];
  heading: string;
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const AuthenticationLayout = ({ children, heading, handleSubmit }: IProps) => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {heading}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
          {children}
        </Box>
      </Box>
      <CopyRight sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default AuthenticationLayout;
