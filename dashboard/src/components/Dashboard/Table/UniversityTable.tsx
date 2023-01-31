import { Alert, Box } from "@mui/material";
import TableWrapper from "../../shared/TableWrapper";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  queryClient,
  queryClientKeyList,
} from "../../../utilities/global/constants";
import {
  deleteUniversity,
  getUniversitiesList,
} from "../../../utilities/api/universityApi";
import useToManuplateUniversity from "../../../hooks/api/useToManuplateUniversity";

const UniversityTable = () => {
  const { error, isLoading, onClickDeleteBtn, query } =
    useToManuplateUniversity();

  const requestError = String(error);

  return (
    <Box>
      {(!!error || isLoading) && (
        <Alert severity={!!error ? "error" : "info"}>
          {!!error ? requestError : "Please wait"}
        </Alert>
      )}
      <Box>
        <TableWrapper
          actionColumn
          columns={["id", "name", "location", "ranking", "rating"]}
          rows={query.data?.items || []}
          onClickDeleteButton={onClickDeleteBtn}
        />
      </Box>
    </Box>
  );
};

export default UniversityTable;
