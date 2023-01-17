import DashboardLayout from "../../Layouts/DashboardLayout";
import AdmissionTable from "../../components/Dashboard/Table/AdmissionTable";
import CustomCard from "../../components/shared/CustomCard";

const Admission = () => {
  return (
    <DashboardLayout heading="Admissions">
      <CustomCard>
        <AdmissionTable />
      </CustomCard>
    </DashboardLayout>
  );
};

export default Admission;
