import {
  Routes,
  Route,
} from "react-router-dom";
import { Box } from "@mui/material";

import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Launch from "./Launch";
import History from "./History";
import Upcoming from "./Upcoming";

const AppLayout = () => {
  const {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  } = useLaunches();

  const planets = usePlanets();
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1, p: 2, display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<Launch
              planets={planets}
              submitLaunch={submitLaunch}
              isPendingLaunch={isPendingLaunch} />} />
          <Route path="/launch" element={<Launch
              planets={planets}
              submitLaunch={submitLaunch}
              isPendingLaunch={isPendingLaunch} />} />
          <Route path="/upcoming" element={<Upcoming
              launches={launches}
              abortLaunch={abortLaunch} />} />
          <Route path="/history" element={<History
              launches={launches} />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;