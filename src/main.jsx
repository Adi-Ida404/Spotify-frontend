import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContext"; // Import the AuthContextProvider
import PlayerContextProvider from "./context/PlayerContext"; // Import the PlayerContextProvider

ReactDOM.render(
    <AuthContextProvider>
        <PlayerContextProvider>
            <App />
        </PlayerContextProvider>
    </AuthContextProvider>,
    document.getElementById("root")
);
