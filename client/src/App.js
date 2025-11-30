import {
  BrowserRouter as Router,
} from "react-router-dom";
import {
  Arwes,
  SoundsProvider,
  ThemeProvider,
  createSounds,
  createTheme,
} from "arwes";

import { PlanetsProvider } from "./contexts/PlanetsContext";
import { LaunchesProvider } from "./contexts/LaunchesContext";

import AppLayout from "./pages/AppLayout";

import { theme, resources, sounds } from "./settings";

const App = () => {
  const soundsObject = createSounds(sounds);

  return <ThemeProvider theme={createTheme(theme)}>
    <SoundsProvider sounds={soundsObject}>
      <Arwes animate background={resources.background.large} pattern={resources.pattern}>
        {anim => (
          <Router>
            <PlanetsProvider>
              <LaunchesProvider sounds={soundsObject}>
                <AppLayout show={anim.entered} />
              </LaunchesProvider>
            </PlanetsProvider>
          </Router>
        )}
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>;
};

export default App;
