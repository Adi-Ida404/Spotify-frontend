import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [name, setName] = useState(null);
    const [login, setLogin] = useState(false);

    const contextValue = {
        name,
        setName,
        login,
        setLogin,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
