import DashboardLayout from "../../Layouts/DashboardLayout";
import CustomCard from "../../components/shared/CustomCard";
import UserTable from "../../components/Dashboard/Table/UserTable";

const User = () => {
  return (
    <DashboardLayout heading="Users">
      <CustomCard>
        <UserTable />
      </CustomCard>
    </DashboardLayout>
  );
};

export default User;
