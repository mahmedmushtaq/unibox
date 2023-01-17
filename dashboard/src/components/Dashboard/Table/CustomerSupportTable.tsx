import { Box } from "@mui/material";
import TableWrapper from "../../shared/TableWrapper";

function createData(userId: string, name: string, email: string) {
  return { userId, name, email };
}

const rows = [
  createData("234324", "NUST", "email@gmail.cojm"),
  createData("234", "FAST", "email1232@gmail.cojm"),
];

const columns = [
  { heading: "User Id" },
  { heading: "Name" },
  { heading: "Email" },
];

const CustomerSupportTable = () => {
  return (
    <Box>
      <TableWrapper columns={columns} rows={rows} />
    </Box>
  );
};

export default CustomerSupportTable;
