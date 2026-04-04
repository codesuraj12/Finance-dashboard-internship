import { createContext, useState } from "react";

import data from "../data/Dummydata.json"


export const Appcontext = createContext();


export const AppProvider = ({children}) => {
    const [transactions, setTransactions] = useState(data);
    const [role, setRole] = useState("viewer");


    return (
        <Appcontext.Provider value={{
            transactions,
            setTransactions,
            role,
            setRole,
        }}>
            {children}
        </Appcontext.Provider>
    )
}