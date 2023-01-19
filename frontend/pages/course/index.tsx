import FrontLayout from "../../src/Layouts/FrontLayout";
import CoursesList from "../../src/components/CoursesList";

const CoursesPage = () => {
  return (
    <FrontLayout>
      <div>
        <CoursesList />
      </div>
    </FrontLayout>
  );
};

export default CoursesPage;
