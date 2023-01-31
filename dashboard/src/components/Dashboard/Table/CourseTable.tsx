import { Alert, Box } from "@mui/material";
import TableWrapper from "../../shared/TableWrapper";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClientKeyList } from "../../../utilities/global/constants";
import { allCourses, deleteCourse } from "../../../utilities/api/courseApi";
import { invalidateAndRefetch } from "../../../utilities/global/helpers";
import useToManuplateCourse from "../../../hooks/api/useToManuplateCouse";

const CourseTable = () => {
  const { error, isLoading, onDelete, query } = useToManuplateCourse();

  return (
    <Box>
      {(!!error || isLoading) && (
        <Alert severity={!!error ? "error" : "info"}>
          {!!error ? String(error) : "Please wait"}
        </Alert>
      )}

      <TableWrapper
        columns={["name", "location", "degreeType"]}
        rows={query.data?.items || []}
        onClickDeleteButton={onDelete}
        actionColumn
      />
    </Box>
  );
};

export default CourseTable;
