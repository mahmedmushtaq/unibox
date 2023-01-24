import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";
import LinkWrapper from "../../../components/shared/LinkWrapper";
import Alert from "@mui/material/Alert";
import AuthenticationLayout from "../../../Layouts/AuthenticationLayout";
import LoadingButton from "../../../components/shared/LoadingButton";
import { SAVE_PRIVATE_PATH_FOR_REDIRECT } from "../../../utilities/global/constants";
import { getPreviousVisitedPrivatePath } from "../../../utilities/global/helpers";

const SignIn = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
      return setErr("All fields are required");
    }

    setLoading(true);
    setErr("");

    try {
      await Auth.signIn(String(email), String(password));
      //refresh browser
      window.location.pathname = getPreviousVisitedPrivatePath();
    } catch (err) {
      setErr(String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationLayout heading="Sign In" handleSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <LoadingButton
        type="submit"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        text={"Sign In"}
        loading={loading}
      />

      {err && <Alert severity="error">{err}</Alert>}
      <Grid container>
        <Grid item xs>
          <LinkWrapper link="/forgot-password" text="Forgot Password" />
        </Grid>
        <Grid item>
          <LinkWrapper link="/sign-up" text="Don't have an account? Sign Up" />
        </Grid>
      </Grid>
    </AuthenticationLayout>
  );
};

export default SignIn;
