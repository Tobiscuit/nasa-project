import { useMemo } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const History = props => {
  const tableBody = useMemo(() => {
    return props.launches?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <TableRow key={String(launch.flightNumber)}>
            <TableCell>
              <span style={{ color: launch.success ? "greenyellow" : "red" }}>█</span>
            </TableCell>
            <TableCell>{launch.flightNumber}</TableCell>
            <TableCell>{new Date(launch.launchDate).toDateString()}</TableCell>
            <TableCell>{launch.mission}</TableCell>
            <TableCell>{launch.rocket}</TableCell>
            <TableCell>{launch.customers?.join(", ")}</TableCell>
          </TableRow>
        );
      });
  }, [props.launches]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">History of mission launches</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        History of mission launches including SpaceX launches starting from the year 2006.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "2rem" }}></TableCell>
              <TableCell style={{ width: "3rem" }}>No.</TableCell>
              <TableCell style={{ width: "9rem" }}>Date</TableCell>
              <TableCell>Mission</TableCell>
              <TableCell style={{ width: "7rem" }}>Rocket</TableCell>
              <TableCell>Customers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBody}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
  
export default History;