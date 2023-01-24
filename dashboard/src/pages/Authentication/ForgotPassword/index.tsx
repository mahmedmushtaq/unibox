import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";
import LinkWrapper from "../../../components/shared/LinkWrapper";
import Alert from "@mui/material/Alert";
import AuthenticationLayout from "../../../Layouts/AuthenticationLayout";
import LoadingButton from "../../../components/shared/LoadingButton";

const ForgotPassword = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showCodeAndNewPasswordField, setShowCodeAndNewPasswordField] =
    useState(false);

  const [forgotPasswordSubmitState, setForgotPasswordSubmitState] = useState({
    code: "",
    newPassword: "",
  });
  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!email) {
      return setErr("Email is required");
    }

    setLoading(true);
    setErr("");

    try {
      await Auth.forgotPassword(email);
      setShowCodeAndNewPasswordField(true);
    } catch (err) {
      setErr(String(err));
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = () => handleSubmit();

  const handleResetNewPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const { code, newPassword } = forgotPasswordSubmitState;

    if (!code || !newPassword) {
      return setErr("All fields are required");
    }

    setLoading(true);
    setErr("");

    try {
      await Auth.forgotPasswordSubmit(email, code, newPassword);
      window.location.pathname = "/";
    } catch (err) {
      setErr(String(err));
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForgotPasswordSubmitState({
      ...forgotPasswordSubmitState,
      [e.target.name]: e.target.value,
    });

  return (
    <AuthenticationLayout
      heading="Forgot Password"
      handleSubmit={
        !showCodeAndNewPasswordField ? handleSubmit : handleResetNewPassword
      }
    >
      {!showCodeAndNewPasswordField ? (
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            label="Enter your email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </>
      ) : (
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="code"
            label="Enter code"
            name="code"
            value={forgotPasswordSubmitState.code}
            onChange={onChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="Enter New Password"
            type="password"
            value={forgotPasswordSubmitState.newPassword}
            onChange={onChange}
            id="newPassword"
          />
          <Typography
            onClick={handleResendEmail}
            color={loading ? "grey" : "primary"}
          >
            Resend Email
          </Typography>
        </>
      )}

      <LoadingButton
        type="submit"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        text={!showCodeAndNewPasswordField ? "Submit" : "Reset"}
        loading={loading}
      />

      {err && <Alert severity="error">{err}</Alert>}
      <Grid container justifyContent="center">
        <LinkWrapper link="/sign-in" text="Cancel" />
      </Grid>
    </AuthenticationLayout>
  );
};

export default ForgotPassword;
