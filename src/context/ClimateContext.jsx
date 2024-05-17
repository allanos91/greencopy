// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { useContext, createContext, useState } from "react";

// creating context
const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

// providing context
export const ClimateProvider = ({ children }) => {
    const [temp, setTemp] = useState(50);
    const [humid, setHumid] = useState(40);

    return (
        <ClimateContext.Provider value={{ temp, setTemp, humid, setHumid }}>
            {children}
        </ClimateContext.Provider>
    )
}
