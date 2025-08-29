import { useMemo } from "react";
import { Box, Typography, TextField, Select, MenuItem, Button, CircularProgress } from "@mui/material";

const Launch = props => {
  const selectorBody = useMemo(() => {
    return props.planets?.map(planet => 
      <MenuItem value={planet.keplerName} key={planet.keplerName}>{planet.keplerName}</MenuItem>
    );
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>Only confirmed planets matching the following criteria are available for the earliest scheduled missions:</Typography>
      <ul>
        <li>Planetary radius &lt; 1.6 times Earth's radius</li>
        <li>Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11 times Earth's value</li>
      </ul>

      <form onSubmit={props.submitLaunch} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px", alignItems: "center" }}>
        <label htmlFor="launch-day">Launch Date</label>
        <TextField type="date" id="launch-day" name="launch-day" InputProps={{ inputProps: { min: today, max: "2040-12-31" } }} defaultValue={today} />
        <label htmlFor="mission-name">Mission Name</label>
        <TextField type="text" id="mission-name" name="mission-name" />
        <label htmlFor="rocket-name">Rocket Type</label>
        <TextField type="text" id="rocket-name" name="rocket-name" defaultValue="Explorer IS1" />
        <label htmlFor="planets-selector">Destination Exoplanet</label>
        <Select id="planets-selector" name="planets-selector" defaultValue="">
          {selectorBody}
        </Select>
        <Button type="submit" variant="contained" color="primary" disabled={props.isPendingLaunch}>
          Launch Mission ✔
        </Button>
        {props.isPendingLaunch &&
          <CircularProgress size={24} />
        }
      </form>
    </Box>
  );
};

export default Launch;