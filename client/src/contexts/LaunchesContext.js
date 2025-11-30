import { createContext, useContext } from 'react';
import useLaunches from '../hooks/useLaunches';

const LaunchesContext = createContext();

export const LaunchesProvider = ({ children, sounds }) => {
    const onSuccessSound = () => sounds.success && sounds.success.play();
    const onAbortSound = () => sounds.abort && sounds.abort.play();
    const onFailureSound = () => sounds.warning && sounds.warning.play();

    const launchesContextValue = useLaunches(onSuccessSound, onAbortSound, onFailureSound);

    return (
        <LaunchesContext.Provider value={launchesContextValue}>
            {children}
        </LaunchesContext.Provider>
    );
};

export const useLaunchesContext = () => {
    return useContext(LaunchesContext);
};
