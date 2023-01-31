import { Box, Typography } from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import UniversityTable from "../../components/Dashboard/Table/UniversityTable";
import CustomCard from "../../components/shared/CustomCard";

const University = () => {
  return (
    <DashboardLayout
      childrenCardBg
      heading="Universities"
      addRecordLink="/university/add"
    >
      <UniversityTable />
    </DashboardLayout>
  );
};

export default University;
