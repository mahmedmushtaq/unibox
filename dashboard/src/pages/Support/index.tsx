import { Box, Typography } from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import SupportUserTable from "../../components/Dashboard/Table/CustomerSupportTable";
import CustomCard from "../../components/shared/CustomCard";

const Support = () => {
  return (
    <DashboardLayout heading="Customer Support">
      <CustomCard>
        <SupportUserTable />
      </CustomCard>
    </DashboardLayout>
  );
};

export default Support;
