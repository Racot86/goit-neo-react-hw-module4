// src/userContext.jsx

import { createContext, useContext, useState } from "react";

const store = createContext();

export const useStore = () => useContext(store);

export const StoreProvider = ({ children }) => {
    const [ image, setImage ] = useState('');


    return (
        <store.Provider value={{ image, setImage }}>
            {children}
        </store.Provider>
    );
};
