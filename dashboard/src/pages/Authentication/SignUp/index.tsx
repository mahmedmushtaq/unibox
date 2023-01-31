import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LinkWrapper from "../../../components/shared/LinkWrapper";
import Alert from "@mui/material/Alert";
import AuthenticationLayout from "../../../Layouts/AuthenticationLayout";
import { Auth } from "aws-amplify";
import LoadingButton from "../../../components/shared/LoadingButton";
import ConfirmationEmail from "../../../components/Authentication/ConfirmationEmail";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfirmEmailField, setShowConfirmEmailField] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = signUpData;

    if (!firstName || !lastName || !email || !password) {
      setErr("all fields are required");
      return;
    }
    const fullName = `${firstName} ${lastName}`;

    setLoading(true);
    setErr("");

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name: fullName,
          // "custom:admin": false,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      setShowConfirmEmailField(true);
    } catch (err) {
      setErr(String(err));
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const onEmailConfirmation = () => {
    navigate("/");
  };

  return (
    <AuthenticationLayout heading="Sign Up" handleSubmit={handleSubmit}>
      {!showConfirmEmailField ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                value={signUpData.firstName}
                onChange={onChange}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                value={signUpData.lastName}
                onChange={onChange}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={signUpData.email}
                onChange={onChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                value={signUpData.password}
                onChange={onChange}
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            text={"Sign Up"}
            loading={loading}
          />

          {err && <Alert severity="error">{err}</Alert>}

          <Grid container justifyContent="flex-end">
            <Grid item>
              <LinkWrapper link="/" text="Already have an account? Sign in" />
            </Grid>
          </Grid>
        </>
      ) : (
        <ConfirmationEmail
          email={signUpData.email}
          onEmailConfirmation={onEmailConfirmation}
        />
      )}
    </AuthenticationLayout>
  );
};

export default SignUp;
