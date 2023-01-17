import { Box } from "@mui/material";
import TableWrapper from "../../shared/TableWrapper";

function createData(
  uniId: string,
  name: string,
  openAdmissionDate: string,
  closeAdmissionDate: string
) {
  return { uniId, name, openAdmissionDate, closeAdmissionDate };
}

const rows = [
  createData("234324", "NUST", "now", "tomorrow"),
  createData("234", "FAST", "now", "day after day"),
];

const columns = [
  { heading: "University id" },
  { heading: "University Name" },
  { heading: "Open Admission Date" },
  { heading: "Close Admission Date" },
];

const AdmissionTable = () => {
  return (
    <Box>
      <TableWrapper columns={columns} rows={rows} />
    </Box>
  );
};

export default AdmissionTable;
