import { ChangeEvent, useState } from "react";
import {
  Button,
  TextField,
  Unstable_Grid2 as Grid,
  Box,
  Alert,
} from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { Auth } from "aws-amplify";
import { findUndefinedKeyInObj } from "../../utilities/global/helpers";

const Setting = () => {
  const [formState, setFormState] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [err, setErr] = useState("");

  const updateUser = async () => {
    if (findUndefinedKeyInObj(formState)) {
      console.log("all fields are required ", formState);
      return;
    }
    setErr("");
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        user,
        formState.oldPassword,
        formState.newPassword
      );
    } catch (err) {
      setErr(String(err));
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <DashboardLayout childrenCardBg heading="Settings">
      <Box py={3} px={2}>
        <Grid container spacing={2}>
          <Grid sm={6}>
            <TextField
              fullWidth
              name="oldPassword"
              value={formState.oldPassword}
              onChange={onChange}
              type="password"
              placeholder="Old Password"
            />
          </Grid>
          <Grid sm={6}>
            <TextField
              fullWidth
              placeholder="Update Password"
              name="newPassword"
              type="password"
              value={formState.newPassword}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Button sx={{ mt: 3 }} variant="contained" onClick={updateUser}>
          Update
        </Button>
        {err && <Alert severity="error">{err}</Alert>}
      </Box>
    </DashboardLayout>
  );
};

export default Setting;
