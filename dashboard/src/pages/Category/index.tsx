import { Box, Typography } from "@mui/material";
import DashboardLayout from "../../Layouts/DashboardLayout";
import SupportUserTable from "../../components/Dashboard/Table/CategoryTable";
import CustomCard from "../../components/shared/CustomCard";

const Category = () => {
  return (
    <DashboardLayout
      childrenCardBg
      heading="Categories"
      addRecordLink="/category/add"
    >
      <SupportUserTable />
    </DashboardLayout>
  );
};

export default Category;
