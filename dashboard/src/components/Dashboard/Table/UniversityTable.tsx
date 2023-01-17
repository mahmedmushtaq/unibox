import { Box } from "@mui/material";
import TableWrapper from "../../shared/TableWrapper";

function createData(uniId: string, name: string, email: string) {
  return { uniId, name, email };
}

const rows = [
  createData("234324", "NUST", "email@gmail.cojm"),
  createData("234", "FAST", "email1232@gmail.cojm"),
];

const columns = [
  { heading: "Registered Uni Id" },
  { heading: "Name" },
  { heading: "Email" },
];

const UniversityTable = () => {
  return (
    <Box>
      <TableWrapper columns={columns} rows={rows} />
    </Box>
  );
};

export default UniversityTable;
