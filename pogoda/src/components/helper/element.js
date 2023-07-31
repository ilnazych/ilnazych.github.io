import { createContext } from "react";
const serverUrl = "http://api.openweathermap.org/";
const apiKey = "16a280187acc44d87742ee95e5dab384";
export const MONTH = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};
export const NowDataContext = createContext();
export { serverUrl, apiKey }