import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import UpdateIcon from '@mui/icons-material/Update';
import HistoryIcon from '@mui/icons-material/History';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="/favicon.png" alt="logo" style={{
          marginRight: "10px",
          height: "50px",
          width: "auto",
        }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NASA Mission Control
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/launch" startIcon={<RocketLaunchIcon />}>
            Launch
          </Button>
          <Button color="inherit" component={Link} to="/upcoming" startIcon={<UpdateIcon />}>
            Upcoming
          </Button>
          <Button color="inherit" component={Link} to="/history" startIcon={<HistoryIcon />}>
            History
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;