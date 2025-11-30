import { createContext, useContext } from 'react';
import usePlanets from '../hooks/usePlanets';

const PlanetsContext = createContext();

export const PlanetsProvider = ({ children }) => {
    const planets = usePlanets();

    return (
        <PlanetsContext.Provider value={planets}>
            {children}
        </PlanetsContext.Provider>
    );
};

export const usePlanetsContext = () => {
    return useContext(PlanetsContext);
};
