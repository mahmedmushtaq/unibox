import {
  Box,
  Card,
  Unstable_Grid2 as Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import CardAnalytics from "../../components/shared/CardAnalytics";
import CustomCard from "../../components/shared/CustomCard";
import UserTable from "../../components/Dashboard/Table/UserTable";
import ReportAreaChart from "../../components/Dashboard/ReportAreaChart";
import { useRoutes } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <CardAnalytics
              title="Total subscribed Users"
              count="4,42,236"
              link="/user"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <CardAnalytics
              title="Registered Universities"
              count="78,250"
              link="/university"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <CardAnalytics
              title="Open Admissions"
              count="18,800"
              link="/admission"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <CardAnalytics title="Support" count="0" link="/support" />
          </Grid>
        </Grid>

        <Grid container mt={1} rowSpacing={4.5} columnSpacing={2.75}>
          <Grid xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid>
                <Typography variant="h5">Recent Subscribed Users </Typography>
              </Grid>
              <Grid />
            </Grid>
            <CustomCard sx={{ mt: 1 }}>
              <UserTable />
            </CustomCard>
          </Grid>
          <Grid xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid>
                <Typography variant="h5">Analytics Report</Typography>
              </Grid>
              <Grid />
            </Grid>
            <CustomCard sx={{ mt: 1 }}>
              <List sx={{ p: 0, "& .MuiListItemButton-root": { py: 2 } }}>
                <ListItemButton>
                  <ListItemText primary="Users Growth" />
                  <Typography variant="h5">Low</Typography>
                </ListItemButton>
              </List>
              <ReportAreaChart />
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
