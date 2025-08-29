import { useMemo } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Upcoming = props => {
  const { 
    launches,
    abortLaunch,
  } = props;

  const tableBody = useMemo(() => {
    return launches?.filter((launch) => launch.upcoming)
      .map((launch) => {
        return (
          <TableRow key={String(launch.flightNumber)}>
            <TableCell>
              <Button variant="outlined" color="error" onClick={() => abortLaunch(launch.flightNumber)} startIcon={<DeleteIcon />}>
                Abort
              </Button>
            </TableCell>
            <TableCell>{launch.flightNumber}</TableCell>
            <TableCell>{new Date(launch.launchDate).toDateString()}</TableCell>
            <TableCell>{launch.mission}</TableCell>
            <TableCell>{launch.rocket}</TableCell>
            <TableCell>{launch.target}</TableCell>
          </TableRow>
        );
      });
  }, [launches, abortLaunch]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">Upcoming Missions</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets.
      </Typography>
      <Typography variant="body2" color="error" sx={{ mt: 1 }}>
        Warning! Clicking on the Abort button aborts the mission.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "8rem" }}></TableCell>
              <TableCell style={{ width: "3rem" }}>No.</TableCell>
              <TableCell style={{ width: "10rem" }}>Date</TableCell>
              <TableCell style={{ width: "11rem" }}>Mission</TableCell>
              <TableCell style={{ width: "11rem" }}>Rocket</TableCell>
              <TableCell>Destination</TableCell>
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

export default Upcoming;