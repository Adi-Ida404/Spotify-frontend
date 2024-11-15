import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [name, setName] = useState(null);
    const [login, setLogin] = useState(false);

    const loginUser = (userName) => {
        setName(userName);
        setLogin(true);
    };

    const logoutUser = () => {
        setName(null);
        setLogin(false);
    };

    const contextValue = {
        name,
        setName,
        login,
        setLogin,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
