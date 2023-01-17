import { Box, Typography } from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import UniversityTable from "../../components/Dashboard/Table/UniversityTable";
import CustomCard from "../../components/shared/CustomCard";

const University = () => {
  return (
    <DashboardLayout heading="Universities">
      <CustomCard>
        <UniversityTable />
      </CustomCard>
    </DashboardLayout>
  );
};

export default University;
