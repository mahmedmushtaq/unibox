import { Box } from "@mui/material";
import TableWrapper from "../../shared/TableWrapper";

function createData(userId: string, email: string, date: string) {
  return { userId, email, date };
}

const rows = [
  createData("Frozen yoghurt", "testuser@gmail.com", "now"),
  createData("Ice cream sandwich", "test1234@gmail.com", "1 hour ago"),
];

const columns = [
  { heading: "User Id" },
  { heading: "Email" },
  { heading: "Date" },
];

const UserTable = () => {
  return (
    <Box>
      <TableWrapper columns={columns} rows={rows} />
    </Box>
  );
};

export default UserTable;
