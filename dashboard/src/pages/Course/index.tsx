import DashboardLayout from "../../Layouts/DashboardLayout";
import CourseTable from "../../components/Dashboard/Table/CourseTable";

const Course = () => {
  return (
    <DashboardLayout
      heading="Courses"
      childrenCardBg
      addRecordLink="/course/add"
    >
      <CourseTable />
    </DashboardLayout>
  );
};

export default Course;
