import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";
import LoadingButton from "../../shared/LoadingButton";
import Alert from "@mui/material/Alert";

interface IProps {
  email: string;
  onEmailConfirmation: () => void;
}

const ConfirmationEmail = ({ email, onEmailConfirmation }: IProps) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const resetLoadingAndErr = () => {
    setLoading(true);
    setErr("");
  };

  const resetEmail = async () => {
    resetLoadingAndErr();
    try {
      await Auth.resendSignUp(email);
    } catch (err) {
      setErr(String(err));
    }
    setLoading(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const submitCode = async () => {
    if (!code) {
      setErr("please enter the code");
      return;
    }
    resetLoadingAndErr();
    try {
      await Auth.confirmSignUp(email, code);
      onEmailConfirmation();
    } catch (err) {
      setErr(String(err));
    }

    setLoading(false);
  };

  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        onChange={onChange}
        value={code}
        label="Enter Code"
        autoFocus
      />
      <Typography
        variant="body2"
        onClick={resetEmail}
        sx={{ color: loading ? "grey" : "primary", cursor: "pointer" }}
      >
        Resend Email
      </Typography>

      <LoadingButton
        type="submit"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        text="Submit"
        loading={loading}
        onClick={submitCode}
      />
      {err && <Alert severity="error">{err}</Alert>}
    </>
  );
};

export default ConfirmationEmail;
