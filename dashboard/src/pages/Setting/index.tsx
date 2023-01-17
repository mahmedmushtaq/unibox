import { Button, TextField, Unstable_Grid2 as Grid } from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";

const Setting = () => {
  return (
    <DashboardLayout heading="Settings">
      <Grid container spacing={2}>
        <Grid sm={6}>
          <TextField fullWidth placeholder="Name" />
        </Grid>
        <Grid sm={6}>
          <TextField fullWidth placeholder="Email" />
        </Grid>
        <Grid sm={6}>
          <TextField fullWidth placeholder="Password" />
        </Grid>
      </Grid>
      <Button sx={{ mt: 3 }} variant="contained">
        Update
      </Button>
    </DashboardLayout>
  );
};

export default Setting;
