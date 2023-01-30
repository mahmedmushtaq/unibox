import {
  Box,
  Card,
  Unstable_Grid2 as Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import CardAnalytics from "../../components/shared/CardAnalytics";
import CustomCard from "../../components/shared/CustomCard";
import ReportAreaChart from "../../components/Dashboard/ReportAreaChart";
import UniversityTable from "../../components/Dashboard/Table/UniversityTable";
import useToManuplateCategory from "../../hooks/api/useToManuplateCategory";
import useToManuplateCourse from "../../hooks/api/useToManuplateCouse";
import useToManuplateUniversity from "../../hooks/api/useToManuplateUniversity";

const Dashboard = () => {
  const { query: cateogryQuery } = useToManuplateCategory();
  const { query: courseQuery } = useToManuplateCourse();
  const { query: univeristyQuery } = useToManuplateUniversity();
  return (
    <DashboardLayout>
      <Box>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <CardAnalytics
              title="Total Categories"
              count={cateogryQuery.data?.items.length || 0}
              link="/category"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <CardAnalytics
              title="Total Universities"
              count={univeristyQuery.data?.items.length || 0}
              link="/university"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <CardAnalytics
              title="Total Courses"
              count={courseQuery.data?.items.length || 0}
              link="/course"
            />
          </Grid>
        </Grid>

        <Grid
          container
          mt={1}
          rowSpacing={4.5}
          columnSpacing={2.75}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid>
                <Typography variant="h5">Registered Universities </Typography>
              </Grid>
              <Grid />
            </Grid>
            <CustomCard sx={{ mt: 1, overflow: "hidden", width: "100%" }}>
              <UniversityTable />
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
